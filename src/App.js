import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    value: "",
    todo: [
      "A simple react to-do list app",
      "Click an item to remove it from the list"
    ]
  };

  removeItem = e => {
    let removeItem = e.currentTarget.innerText;
    let newToDo = this.state.todo.filter(todo => {
      return todo !== removeItem;
    });
    this.setState({ todo: [...newToDo] });
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  add = e => {
    e.preventDefault();
    if (this.state.value) {
      let newItem = this.state.value;
      let todo = this.state.todo;
      todo.push(newItem);
      this.setState({
        todo: todo,
        value: ""
      });
    }
  };

  value = e => {
    e.target.value = "";
  };

  render() {
    return (
      <div className="App">
        <h1>Ashley's React To-Do list</h1>
        <form>
          <input
            type="text"
            placeholder="To-do..."
            onChange={this.handleChange}
            onFocus={this.value}
          />
          <input type="submit" onClick={this.add} />
        </form>
        {this.state.todo.map(item => (
          <li onClick={this.removeItem} key={item}>
            {item}
          </li>
        ))}
      </div>
    );
  }
}

export default App;
