export function addTodoItem(item) {
  return { type: "ADD_TODO", item: item };
}

export function removeTodoItem(index) {
  return { type: "REMOVE_TODO", index: index };
}
