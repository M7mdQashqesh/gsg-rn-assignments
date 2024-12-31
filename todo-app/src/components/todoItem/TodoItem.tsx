import "./todoItem.css";
import { Tasks } from "../../types";

interface IProps {
  data: Tasks;
  onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: () => void;
}

const TodoItem = (props: IProps) => {
  const urgent = props.data.isUrgent;

  return (
    <div className={`todo-item ${urgent ? "urgent" : ""}`}>
      <input
        className="complete-btn"
        type="checkbox"
        checked={props.data.isCompleted}
        onChange={props.onToggle}
        data-item-id={props.data.id}
      />
      <span className="complete">{props.data.title}</span>
      <i className="fa-solid fa-trash trash" onClick={props.onDelete}></i>
    </div>
  );
};

export default TodoItem;
