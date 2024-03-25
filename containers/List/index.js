import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import Item from '../ItemContainer';
import Message from '../../components/Message';
import ListStyle from '../../components/List';

const List = ({ tab }) => {
  const todolist = useSelector((state) => state.todolist);
  const [list, setList] = useState(todolist);

  useEffect(() => {
    if (tab === 'finished') {
      setList(todolist.filter((item) => item.isFinished));
    } else if (tab === 'unfinished') {
      setList(todolist.filter((item) => !item.isFinished));
    } else {
      setList(todolist);
    }
  }, [tab, todolist]);

  const content = (() => {
    if (list.length === 0) {
      return <Message>There is nothing here...</Message>;
    }
    return list.map((todo) => <Item todo={todo} key={todo.id} />);
  })();

  return <ListStyle>{content}</ListStyle>;
};

List.propTypes = {
  tab: propTypes.string,
};

export default List;
