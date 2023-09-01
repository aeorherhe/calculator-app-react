// imports
import { useGlobalContext } from "./GlobalContext";
import formatNumbers from "./functions/formatNumbers";

export function CalcDisplay() {
  const { state } = useGlobalContext();
  const { prevValue, currValue, operator } = state;

  return (
    <div className="calc-result-dashboard">
      <p className="prev-operation">
        {formatNumbers(prevValue)} {prevValue == "" ? "" : operator}
      </p>
      <p className="curr-operation">{formatNumbers(currValue)}</p>
    </div>
  );
}
