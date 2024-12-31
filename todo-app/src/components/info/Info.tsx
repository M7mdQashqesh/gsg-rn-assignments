import { Tasks } from "../../types";
import "./info.css";

interface IProps {
  items: Tasks[];
}

const Info = (props: IProps) => {
  const numberOfUrgent = props.items.filter((item) => item.isUrgent).length;
  const numberOfCompleted = props.items.filter((item) => item.isCompleted).length;

  return (
    <div className="info-page">
      <div className="created">
        <span>{props.items.length}</span>
        <span>Created tasks</span>
      </div>
      <div className="urgent">
        <span>{numberOfUrgent}</span>
        <span>Urgent tasks</span>
      </div>
      <div className="completed">
        <span>{numberOfCompleted}</span>
        <span>Completed tasks</span>
      </div>
    </div>
  );
};

export default Info;
