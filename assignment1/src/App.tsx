import { useState } from "react";
import "./App.css";
import Result from "./components/result/Result";

function App() {
  const [firstOperand, setFirstOperand] = useState("");
  const [operation, setOperation] = useState("");
  const [secondOperand, setSecondOperand] = useState("");
  const [result, setResult] = useState(null);
  const [needReset, setNeedReset] = useState(false);

  const buttons: string[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "c",
    "=",
  ];

  const clearDisplay = () => {
    setFirstOperand("");
    setOperation("");
    setSecondOperand("");
    setResult(null);
    setNeedReset(false);
  };

  const calculateResult = () => {
    const num1 = Number(firstOperand);
    const num2 = Number(secondOperand);

    if (!isNaN(num1) && !isNaN(num2)) {
      let res;
      if (operation === "+") {
        res = num1 + num2;
      } else if (operation === "-") {
        res = num1 - num2;
      }
      setResult(res);
      setNeedReset(true);
    }
  };

  const handleExpression = (value: string) => {
    if (needReset) {
      clearDisplay();
    } else {
      if (operation) {
        if (value === "c") {
          clearDisplay();
        } else if (value === "-" || value === "+") {
          setOperation(value);
        } else if (value === "=") {
          calculateResult();
        } else {
          setSecondOperand(secondOperand + value);
        }
      } else {
        if (value === "c") {
          clearDisplay();
        } else if (value === "-" || value === "+") {
          setOperation(value);
        } else if (value !== "=") {
          setFirstOperand(firstOperand + value);
        }
      }
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div>{firstOperand}</div>
        <div>{operation}</div>
        <div>{secondOperand}</div>
        <Result result={result} />
      </div>
      <div className="btns">
        {buttons.map((btn, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                handleExpression(btn);
              }}
            >
              {btn}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
