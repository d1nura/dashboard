const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.item];

    default:
      return state;
  }
};

export default todoReducer;
