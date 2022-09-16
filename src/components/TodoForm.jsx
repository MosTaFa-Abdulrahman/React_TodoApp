function TodoForm({ handleSubmit, todo, editId, setTodo }) {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit"> {editId ? "OK" : "ADD"}</button>
    </form>
  );
}

export default TodoForm;
