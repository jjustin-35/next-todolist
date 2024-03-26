"use client";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Item from "../Item";
import Message from "../../components/Message";
import Tab from "../../components/Tab";
import ListStyle from "../../components/List";
import { RootState } from "@/redux/store";
import { Todo, Tabs } from "@/constants/type";
import { useTranslation } from "@/libs/i18n/client";

const List = ({ lang }: { lang: string }) => {
  const { todos } = useSelector((state: RootState) => state.todolist);
  const [list, setList] = useState<Todo[]>(todos);
  const [tab, setTab] = useState<Tabs>(Tabs.all);
  const { t } = useTranslation(lang, "common");

  useEffect(() => {
    if (tab === Tabs.finished) {
      setList(todos.filter((item) => item.isFinished));
    } else if (tab === Tabs.unfinished) {
      setList(todos.filter((item) => !item.isFinished));
    } else {
      setList(todos);
    }
  }, [tab, todos]);

  const onTab = (tab: Tabs) => {
    setTab(tab);
  };

  const content = (() => {
    if (list.length === 0) {
      return <Message>There is nothing here...</Message>;
    }
    return list.map((todo) => <Item todo={todo} key={todo.id} />);
  })();

  return (
    <>
      <Tab t={t} tab={tab} onTab={onTab} />
      <ListStyle>{content}</ListStyle>
    </>
  );
};

export default List;
