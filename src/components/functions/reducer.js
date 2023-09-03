import computeValues from "./computeValues";
import { initialState, OPERATIONS } from "../GlobalContext";

// reducer function
const reducer = (state, { type, payload }) => {
  switch (type) {
    // append entries
    case OPERATIONS.ENTRIES:
      if (state.computed) {
        return {
          ...state,
          currValue: "" + payload,
          computed: false,
        };
      }

      if (payload === "0" && state.currValue === "0") return state;

      if (payload === "." && state.currValue.includes(".")) return state;

      return {
        ...state,
        currValue: `${state.currValue || ""}${payload}`,
      };

    //   choose operator
    case OPERATIONS.OPERATOR:
      if (state.currValue == "" && state.prevValue == "") return state;

      if (state.currValue == "") {
        return {
          ...state,
          operator: payload,
          prevValue: `${state.prevValue.slice(0, -1)} `,
        };
      }

      if (state.prevValue == "") {
        return {
          ...state,
          operator: payload,
          prevValue: `${state.currValue} `,
          currValue: "",
        };
      }

      return {
        ...state,
        operator: payload,
        prevValue: `${computeValues(state)} `,
        currValue: "",
      };

    //   delete entries
    case OPERATIONS.DELETE:
      if (state.currValue === "" || state.currValue === "") return state;

      if (state.currValue.length === 1) {
        return {
          ...state,
          currValue: "",
        };
      }

      if (payload === "AC.") {
        return {
          ...state,
          currValue: "",
          computed: false,
        };
      }

      return {
        ...state,
        currValue: state.currValue.slice(0, -1),
      };

    //   reset calculator
    case OPERATIONS.RESET:
      return { ...initialState };

    //   compute values
    case OPERATIONS.COMPUTE:
      if (state.currValue === "") return state;
      if (state.prevValue === "") return state;

      return {
        ...state,
        currValue: computeValues(state),
        prevValue: "",
        computed: true,
      };
  }
};

export default reducer;
