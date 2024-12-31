import { useState } from "react";
import "./App.css";
import AllTodos from "./components/allTodos/AllTodos";
import Form from "./components/form/Form";
import Info from "./components/info/Info";
import { Tasks } from "./types";

function App() {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  const handleNewItem = (newTask: Tasks) => {
    setTasks([...tasks, newTask]);
  };

  const handleCompletedTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    const itemId = e.target.dataset["itemId"];
    setTasks(
      tasks.map((item) =>
        item.id === Number(itemId)
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      )
    );
  };

  const handleDelete = (index:number) => {
    setTasks([...tasks.slice(0,index),...tasks.slice(index+1,tasks.length)])
  }

  return (
    <div className="App">
      <Form onSubmit={handleNewItem} />
      <Info items={tasks} />
      <AllTodos items={tasks} onToggle={handleCompletedTask} onDelete={handleDelete} />
    </div>
  );
}

export default App;
