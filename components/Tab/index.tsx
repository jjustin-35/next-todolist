import React from "react";
import { TabButton, TabButtons } from "./styled";
import { Tabs } from "@/constants/type";

const Tab = ({ onTab, tab }: { onTab: (tab: Tabs) => void; tab: string }) => {
  let options = [Tabs.all, Tabs.finished, Tabs.unfinished];
  return (
    <TabButtons>
      {options.map((opt) => {
        const isActive = tab === opt;
        return (
          <TabButton
            isActive={isActive}
            key={opt}
            id={opt}
            onClick={() => onTab(opt)}
          >
            {opt}
          </TabButton>
        );
      })}
    </TabButtons>
  );
};

export default Tab;
