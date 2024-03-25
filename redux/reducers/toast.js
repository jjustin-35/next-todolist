import * as actions from '../../constant/actionType';

const initState = null;

export const toast = (state = initState, action) => {
  switch (action.type) {
    case actions.POST_TOAST:
      return action.payload;
    case actions.CLEAR_TOAST:
      return null;
    default:
      return state;
  }
};
