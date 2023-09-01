/* eslint-disable react/prop-types */
import { useGlobalContext } from "./GlobalContext";

// prettier-ignore
const keys =
[7, 8, 9, "DEL", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "÷", "x", "RESET", "="];

const operators = ["+", "-", "÷", "x"];
let a = "+";

if (operators.includes(a)) console.log(a);

export function CalcKeys() {
  const { state, dispatch, OPERATIONS } = useGlobalContext();
  const DEL = state.computed ? "AC" : "DEL";

  return (
    <>
      <div className="calc-keys">
        {keys.map((key) => {
          return (
            <button
              key={key}
              // prettier-ignore
              className={ key === "DEL"
                  ? "delete-btn" : key === "RESET"
                  ? "reset-btn" : key === "="
                  ? "equals-btn" : "value"
              }
              // prettier-ignore
              onClick={() =>
                dispatch({ type: `${
                    key === "DEL" ? OPERATIONS.DELETE
                      : key === "RESET" ? OPERATIONS.RESET
                      : key === "=" ? OPERATIONS.COMPUTE
                      : operators.includes(key) ? OPERATIONS.OPERATOR
                      : OPERATIONS.ENTRIES
                  }`,

                  // prettier-ignore
                  payload: `${ key === "DEL" ? DEL
                      : key === "RESET" ? null
                      : key === "=" ? null
                      : operators.includes(key) ? key
                      : key
                  }`,
                })
              }
            >
              {key === "DEL" ? DEL : key}
            </button>
          );
        })}
      </div>
      ;
    </>
  );
}

/*************************************
This is an alternative code for CalcKeys.jsx
A more readable code
**************************************/

// import { useGlobalContext } from "./GlobalContext";
// export function CalcKeys() {
//   const { state, dispatch, OPERATIONS } = useGlobalContext();
//   const DEL = state.computed ? "AC" : "DEL";
//   // const { type, payload } = dispatch;

//   return (
//     <div className="calc-keys">
//       <CalcDigits calcDigit={7} />
//       <CalcDigits calcDigit={8} />
//       <CalcDigits calcDigit={9} />
//       {/* <CalcOperatorkeys CalcOperatorkey={"DEL"} /> */}
//       <button className="delete-btn" onClick={()=>dispatch({type: OPERATIONS.DELETE, payload: DEL})}>{DEL}</button>
//       <CalcDigits calcDigit={4} />
//       <CalcDigits calcDigit={5} />
//       <CalcDigits calcDigit={6} />
//       <CalcOperatorkeys CalcOperatorkey={"+"} />
//       <CalcDigits calcDigit={1} />
//       <CalcDigits calcDigit={2} />
//       <CalcDigits calcDigit={3} />
//       <CalcOperatorkeys CalcOperatorkey={"-"} />
//       <CalcDigits calcDigit={"."} />
//       <CalcDigits calcDigit={0} />
//       <CalcOperatorkeys CalcOperatorkey={"÷"} />
//       <CalcOperatorkeys CalcOperatorkey={"x"} />
//       {/* <CalcOperatorkeys CalcOperatorkey={"RESET"} /> */}
//       <button className="reset-btn" onClick={()=>dispatch({type: OPERATIONS.RESET})}>RESET</button>
//       <button className="equals-btn" onClick={()=>dispatch({type: OPERATIONS.COMPUTE})}>=</button>
//       {/* <CalcOperatorkeys CalcOperatorkey={"="} /> */}
//     </div>
//   );
// }

// const CalcDigits = ({ calcDigit }) => {
//   const { dispatch, OPERATIONS } = useGlobalContext();
//   return (
//     <button
//       className="value"
//       onClick={() =>
//         dispatch({
//           type: OPERATIONS.ENTRIES,
//           payload: calcDigit.toString(),
//         })
//       }
//     >
//       {calcDigit}
//     </button>
//   );
// };

// const CalcOperatorkeys = ({ CalcOperatorkey }) => {
//   const { dispatch, OPERATIONS } = useGlobalContext();
//   return (
//     <button
//       className="operators"
//       onClick={() =>
//         dispatch({ type: OPERATIONS.OPERATOR, payload: CalcOperatorkey })
//       }
//     >
//       {CalcOperatorkey}
//     </button>
//   );
// };
