import "./App.css";
import { Component } from "react";
import TodoContainer from "./TodoContainer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "write daily" },
        { text: "Exercise daily" },
        { text: "Code daily" },
      ],
    };
  }
  handleAdd = (text) => {
    if (text === "") {
      return;
    }
    this.setState((prev) => ({
      todos: [{ text }, ...prev.todos],
    }));
    console.log(this.state);
  };

  handleRemove = (text) => {
    const filteredTodo = this.state.todos.filter((todo) => todo.text !== text);
    this.setState({
      todos: filteredTodo,
    });
  };
  render() {
    return (
      <>
        <TodoContainer
          todos={this.state.todos}
          onAdd={this.handleAdd}
          removeText={this.handleRemove}
        />
      </>
    );
  }
}
