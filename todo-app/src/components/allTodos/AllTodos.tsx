import { Tasks } from "../../types";
import TodoItem from "../todoItem/TodoItem";
import "./allTodos.css";

interface IProps {
  items: Tasks[];
  onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: (index: number) => void;
}

const AllTodos = (props: IProps) => {
  return (
    <div className="allTodos-page">
      {props.items.map((item, index) => {
        return (
          <TodoItem
            key={item.id}
            data={item}
            onToggle={props.onToggle}
            onDelete={() => props.onDelete(index)}
          />
        );
      })}
    </div>
  );
};

export default AllTodos;
