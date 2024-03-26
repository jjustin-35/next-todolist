"use client";

import React from "react";
import { useTranslation } from "@/libs/i18n/client";
import { Brand } from "./styled";

export const Banner = ({ lang }: { lang: string }) => {
  const { t } = useTranslation(lang, "common");
  return <Brand appearance="black">{t("title")}</Brand>;
};
