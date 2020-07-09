import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import "./components/Todo.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          task: 'Build A ToDo App',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Style ToDo App',
          id: 1528817084358,
          completed: false
        }
      ],
      todo: ''
    };
    console.log('constructor', this.state.todos);
  }
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTodo = e => {
    e.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState({ todos, todo: '' });
  };

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });

  toggleTodoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  clearCompletedTodos = e => {
    e.preventDefault();
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  

  render() {
    return (
      <div className="App" >
          <div className="header">
            <h1>Beth's ToDo List</h1>
          </div>
          <TodoForm
            value={this.state.todo}
            handleTodoChange={this.changeTodo}
            handleAddTodo={this.addTodo}
            handleClearTodos={this.clearCompletedTodos}
          />
          <TodoList
            handleToggleComplete={this.toggleTodoComplete}
            todos={this.state.todos}
          />
      </div>
    );
  }
}

export default App;
