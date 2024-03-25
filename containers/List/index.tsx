import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Item from "../ItemContainer";
import Message from "../../components/Message";
import Tab from "../../components/Tab";
import ListStyle from "../../components/List";
import { RootState } from "@/redux/store";
import { Todo, Tabs } from "@/constants/type";

const List = () => {
  const { todos } = useSelector((state: RootState) => state.todolist);
  const [list, setList] = useState<Todo[]>(todos);
  const [tab, setTab] = useState<Tabs>(Tabs.all);

  const onTab = (tab: Tabs) => {
    if (tab === Tabs.finished) {
      setList(todos.filter((item) => item.isFinished));
    } else if (tab === Tabs.unfinished) {
      setList(todos.filter((item) => !item.isFinished));
    } else {
      setList(todos);
    }
  };

  const content = (() => {
    if (list.length === 0) {
      return <Message>There is nothing here...</Message>;
    }
    return list.map((todo) => <Item todo={todo} key={todo.id} />);
  })();

  return (
    <>
      <Tab tab={tab} onTab={onTab} />
      <ListStyle>{content}</ListStyle>
    </>
  );
};

export default List;
