import * as actions from '../../constant/actionType';

export const postTodo = (data) => ({
  type: actions.POST_TODO,
  payload: {
    ...data,
    isFinished: false,
  },
});

export const putTodo = (data) => ({
  type: actions.PUT_TODO,
  data,
});

export const removeTodo = (id) => ({
  type: actions.REMOVE_TODO,
  id,
});

export const putToggleTodo = (id) => ({
  type: actions.PUT_TOGGLE_TODO,
  id,
});

export const postToast = ({ isSuccess, message, id }) => ({
  type: actions.POST_TOAST,
  payload: {
    isSuccess,
    message,
    id,
  },
});

export const clearToast = (id) => ({
  type: actions.CLEAR_TOAST,
  id,
});
