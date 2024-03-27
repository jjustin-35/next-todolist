import "server-only";

import { cache } from "react";
import { createInstance, i18n } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "./settings";

const i18nCache = cache(() => {
  let i18nInstance: i18n | undefined;
  return {
    get: () => i18nInstance,
    set: (instance: i18n) => {
      i18nInstance = instance;
    },
  };
});

export const initI18next = async (lng: string, ns?: string | string[]) => {
  let i18nInstance = i18nCache().get();
  if (i18nInstance) {
    return i18nInstance;
  }

  i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        async (language: string, namespace: string) =>
          await import(`/public/locales/${language}/${namespace}.json`)
      )
    )
    .init({
      ...getOptions(lng, ns),
      preload: [lng],
    });

  i18nCache().set(i18nInstance);
};

export function getTranslation(
  ns: string | string[] | undefined,
  options: { keyPrefix?: string } = {}
) {
  const i18nInstance = i18nCache().get();
  if (!i18nInstance) {
    throw new Error("i18n is not initialized");
  }
  return {
    t: i18nInstance.getFixedT(
      i18nInstance.language,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix
    ),
    i18n: i18nInstance,
  };
}
