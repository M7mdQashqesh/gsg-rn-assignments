import React from "react";
import "./form.css";
import { Tasks } from "../../types";

interface IProps {
  onSubmit: (task: Tasks) => void;
}

const Form = (props: IProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const taskName: string = e.currentTarget["taskName"].value;
    const IsUrgent: boolean = e.currentTarget["urgent"].checked;
    if (taskName.length > 3) {
      const newTask: Tasks = {
        id: Date.now(),
        title: taskName,
        isUrgent: IsUrgent,
        isCompleted: false,
      };

      props.onSubmit(newTask);

      e.currentTarget["taskName"].value = "";
      e.currentTarget["urgent"].checked = false;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="todo-title">
        <input type="text" name="taskName" placeholder="Type todo here" />
        <input type="submit" value="Add Todo" />
      </div>

      <div className="urgent">
        <input className="checkbox" id="urgent" type="checkbox" name="urgent" />
        <label htmlFor="urgent">Urgent todo</label>
      </div>
    </form>
  );
};

export default Form;
