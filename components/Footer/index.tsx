"use client";

import { Wrapper } from "./styled";
import data from "./data";

const Footer = ({ lang }: { lang: string }) => {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = data.lang.find((item) => item.id === e.target.value);
    if (selectedLang) {
      window.location.href = `/${selectedLang.id}`;
    }
  };
  return (
    <Wrapper>
      <p>all right reserves.</p>
      <select
        name="lang"
        id="lang"
        onChange={onChange}
        defaultValue={lang}
      >
        {data.lang.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </Wrapper>
  );
};

export default Footer;
