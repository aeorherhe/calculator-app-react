function computeValues(state) {
  const prevValue = parseFloat(state.prevValue);
  const currValue = parseFloat(state.currValue);
  if (isNaN(prevValue) || isNaN(currValue)) return;
  let result;
  switch (state.operator) {
    case "+":
      result = prevValue + currValue;
      break;
    case "-":
      result = prevValue - currValue;
      break;
    case "x":
      result = prevValue * currValue;
      break;
    case "÷":
      result = prevValue / currValue;
      break;
    default:
      return;
  }
  return result.toString();
}

export default computeValues;
