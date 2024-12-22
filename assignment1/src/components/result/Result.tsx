import "./result.css";

interface IProps {
  result: string | null;
}

const Result = (props: IProps) => {
  return <div>{props.result ? `= ${props.result}` : ""}</div>;
};

export default Result;
