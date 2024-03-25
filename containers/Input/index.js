import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postTodo, postToast } from '../../redux/actions';
import InputStyle from '../../components/Input';

export const Input = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const onAdd = () => {
    const id = uuidv4();
    let input = inputRef.current.value;
    if (!input)
      return dispatch(
        postToast({
          isSuccess: false,
          message: 'Todo is required',
          id,
        }),
      );
    dispatch(postTodo({ memo: input, id }));
    dispatch(
      postToast({
        isSuccess: true,
        message: 'Todo is added',
        id: uuidv4(),
      }),
    );
    inputRef.current.value = '';
  };
  return <InputStyle onAdd={onAdd} inputRef={inputRef} />;
};
