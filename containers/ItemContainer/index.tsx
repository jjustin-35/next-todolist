import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { putToggleTodo, removeTodo, putTodo } from "@/redux/slice/todolist";
import { postToast } from "@/redux/slice/toast";
import ItemStyle from "../../components/Item";
import { Todo } from "@/constants/type";

const Item = ({ todo }: { todo: Todo }) => {
  const dispatch = useDispatch();
  const { id } = todo;

  const onCheck = () => {
    dispatch(putToggleTodo(id));
  };

  const onDelete = () => {
    dispatch(removeTodo(id));
    dispatch(
      postToast({
        isSuccess: true,
        message: "Todo is removed",
        id: uuidv4(),
      })
    );
  };

  const onEditFinished = (memo: string) => {
    if (!memo)
      return dispatch(
        postToast({
          isSuccess: false,
          message: "Input is required",
          id: uuidv4(),
        })
      );
    dispatch(putTodo({ memo, id, isFinished: false }));
    dispatch(
      postToast({
        isSuccess: true,
        message: "Todo is edited",
        id: uuidv4(),
      })
    );
  };

  return (
    <ItemStyle
      onCheck={onCheck}
      onEditFinished={onEditFinished}
      onDelete={onDelete}
      todo={todo}
    />
  );
};

export default Item;
