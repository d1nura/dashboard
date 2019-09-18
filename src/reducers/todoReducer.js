const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.item];
    case "REMOVE_TODO":
      state.splice(action.index, 1);
      return state;

    default:
      return state;
  }
};

export default todoReducer;
