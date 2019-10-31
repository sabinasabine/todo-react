import React from "react";

import "./style/Input.css";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTaskText: ""
    };
  }

  updateTaskText = event => {
    this.setState({
      newTaskText: event.target.value
    });
  };
  handleClick = event => {
    event.preventDefault();
    const task = this.state.newTaskText;
    this.props.addTodo(task);
    this.setState({
      newTaskText: ""
    });
  };

  render() {
    return (
      <form className="input-form" onSubmit={this.handleClick}>
        <div className="input-wrap">
          <input
            type="text"
            value={this.state.title}
            placeholder="Type to add new tasks"
            onChange={this.updateTaskText}
          />
          <button>Add</button>
        </div>
      </form>
    );
  }
}

export default Input;
