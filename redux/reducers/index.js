import { combineReducers } from 'redux';
import { todolist } from './todolist';
import { toast } from './toast';

const rootReducer = combineReducers({
  todolist,
  toast,
});

export default rootReducer;
