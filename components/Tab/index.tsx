import React from "react";
import { TabButton, TabButtons } from "./styled";

const TabStyle = ({
  options,
  onTab,
  tab,
}: {
  options: string[];
  onTab: (e: React.MouseEvent<HTMLButtonElement>) => void;
  tab: string;
}) => {
  return (
    <TabButtons>
      {options.map((opt) => {
        const isActive = tab === opt;
        return (
          <TabButton isActive={isActive} key={opt} id={opt} onClick={onTab}>
            {opt}
          </TabButton>
        );
      })}
    </TabButtons>
  );
};

export default TabStyle;
