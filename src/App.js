import React, { Fragment } from "react";
import TodoItem from "./TodoItem";
import Input from "./Input";
import todosData from "./todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
  }

  handleChange = id => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  };

  delToDo = id => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.filter(todo => todo.id !== id);
      return {
        todos: updatedTodos
      };
    });
  };

  addTodo = taskText => {
    if (taskText === "") {
      console.log("Input text");
    } else {
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
      };

      this.setState({ todos: [...this.state.todos, newTask] });
    }
  };

  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItem
        key={item.id}
        item={item}
        handleChange={this.handleChange}
        delToDo={this.delToDo}
      />
    ));

    return (
      <Fragment>
        <div className="todo-list">
          <Input addTodo={this.addTodo} />
          {todoItems}
        </div>
      </Fragment>
    );
  }
}

export default App;
