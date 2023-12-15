import React, { useState } from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <ul className="filters">
      <li>
        <a
          href="#/"
          className={filter === 'all' ? 'selected' : ''}
          onClick={() => setFilter('all')}
        >
          All
        </a>
      </li>
      <li>
        <a
          href="#/active"
          className={filter === 'active' ? 'selected' : ''}
          onClick={() => setFilter('active')}
        >
          Active
        </a>
      </li>
      <li>
        <a
          href="#/completed"
          className={filter === 'completed' ? 'selected' : ''}
          onClick={() => setFilter('completed')}
        >
          Completed
        </a>
      </li>
    </ul>
  );
};

function Todo() {
  const initialTodos = [
    { text: 'Taste JavaScript', done: true },
    { text: 'Code furiously', done: true },
    { text: 'Promote Mavo', done: false },
    { text: 'Give talks', done: false },
    { text: 'Write tutorials', done: true },
    { text: 'Have a life!', done: false },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, done: false }]);
      setNewTodo('');
    }
  };

  const clearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.done);
    setTodos(updatedTodos);
  };

  const handleToggle = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  };

  const toggleAllCompleted = () => {
    const areAllCompleted = todos.every((todo) => todo.done);
    const updatedTodos = todos.map((todo) => ({ ...todo, done: !areAllCompleted }));
    setTodos(updatedTodos);
  };

  const completedCount = todos.filter((todo) => todo.done).length;
  const showClearCompleted = completedCount > 0;

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') {
      return !todo.done;
    } else if (filter === 'completed') {
      return todo.done;
    }
    return true;
  });

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addTodo();
          }}
        >
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </form>
      </header>

      <section className={todos.length > 0 ? 'main' : 'main hidden'}>
        <input
          className="toggle-all"
          type="checkbox"
          checked={todos.every((todo) => todo.done)}
          onChange={toggleAllCompleted}
        />
        <label htmlFor="toggle-all" onClick={toggleAllCompleted}>Mark all as complete</label>

        <ul className="todo-list">
          {filteredTodos.map((todo, index) => (
            <li key={index} className={todo.done ? 'completed' : ''}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => handleToggle(index)}
                />
                <label>{todo.text}</label>
                <button
                  className="destroy"
                  onClick={() => {
                    const filteredTodos = todos.filter((_, i) => i !== index);
                    setTodos(filteredTodos);
                  }}
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <footer className={todos.length > 0 ? 'footer' : 'footer hidden'}>
        <span className="todo-count">
          <strong>{todos.filter((todo) => !todo.done).length}</strong> item{todos.filter((todo) => !todo.done).length !== 1 ? 's' : ''} left
        </span>
        <Filter filter={filter} setFilter={setFilter} />
        {showClearCompleted && (
          <button className="clear-completed" onClick={clearCompleted}>
            Clear completed
          </button>
        )}
      </footer>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>Created by <a href=" ">Ali BAŞDEMİR</a></p>
        <p>Part of FakirHerif</p>
        <br/>
      </footer>
    </section>
  );
}

export default Todo;
