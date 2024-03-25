import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import * as actions from '../../redux/actions';
import propTypes from 'prop-types';
import ItemStyle from '../../components/Item';

const Item = ({ todo }) => {
  const dispatch = useDispatch();
  const { id } = todo;

  const onCheck = () => {
    dispatch(actions.putToggleTodo(id));
  };

  const onDelete = () => {
    dispatch(actions.removeTodo(id));
    dispatch(
      actions.postToast({
        isSuccess: true,
        message: 'Todo is removed',
        id: uuidv4(),
      }),
    );
  };

  const onEditFinished = (memo) => {
    if (!memo)
      return dispatch(
        actions.postToast({
          isSuccess: false,
          message: 'Input is required',
          id: uuidv4(),
        }),
      );
    dispatch(actions.putTodo({ memo, id }));
    dispatch(
      actions.postToast({
        isSuccess: true,
        message: 'Todo is edited',
        id: uuidv4(),
      }),
    );
  };

  return <ItemStyle onCheck={onCheck} onEditFinished={onEditFinished} onDelete={onDelete} todo={todo} />;
};

Item.propTypes = {
  todo: propTypes.object,
};

export default Item;
