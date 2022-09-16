function TodoList({ todos, handleDelete, handleEdit }) {
  return (
    <ul className="allTodos">
      {todos.map((t) => (
        <li className="singleTodo">
          <span className="todoText" key={t.id}>
            {t.todo}
          </span>
          <button className="edit" onClick={() => handleEdit(t.id)}>
            Edit
          </button>
          <button className="delete" onClick={() => handleDelete(t.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
