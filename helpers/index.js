export const updateArrayItem = (array, itemId, callback) =>
  array.map((item) => {
    if (item.id !== itemId) {
      return item;
    }

    return callback(item);
  });

export const postTodoState = (state, action) => [...state, action.payload];

export const putTodoState = (state, action) =>
  updateArrayItem(state, action.data.id, (todo) => ({ ...todo, memo: action.data.memo }));

export const removeTodoState = (state, action) => state.filter((todo) => todo.id !== action.id);

export const putToggleTodoState = (state, action) =>
  updateArrayItem(state, action.id, (todo) => ({ ...todo, isFinished: !todo.isFinished }));
