import * as actions from '../../constant/actionType';
import { postTodoState, putTodoState, removeTodoState, putToggleTodoState } from '../../helpers';

const initState = [{ memo: 'finish the todolist', isFinished: false, id: '1111' }];

export const todolist = (state = initState, action) => {
  switch (action.type) {
    case actions.POST_TODO:
      return postTodoState(state, action);
    case actions.PUT_TODO:
      return putTodoState(state, action);
    case actions.REMOVE_TODO:
      return removeTodoState(state, action);
    case actions.PUT_TOGGLE_TODO:
      return putToggleTodoState(state, action);
    default:
      return state;
  }
};
