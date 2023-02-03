import React from "react";
import ToDoList, { Item } from "./ToDoList";

const initialList = [
  {
    task: "Pick up Milk",
    priority: 1,
  },
  {
    task: "Buy Eggs",
    priority: 2,
  },
  {
    task: "Buy Bread",
    priority: 3,
  },
];

class App extends React.Component<{}, { items: Item[] }> {

  constructor(props: any) {
    super(props);
    this.state = {
      items: initialList,
    };
  }

  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <br />
        <ToDoList items={items} />
      </div>
    );
  }
}

export default App;
