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
  render() {
    return (
      <div className="App">
        <h1>Ashley's To-Do list</h1>
        <form>
          <input type="text" placeholder="To-do..." />
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
