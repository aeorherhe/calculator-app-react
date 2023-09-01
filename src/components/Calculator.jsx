// imports
// import { useGlobalContext } from "./GlobalContext";

import { CalcDisplay } from "./CalcDisplay";
import { CalcKeys } from "./CalcKeys";
import { CalcThemes } from "./CalcThemes";

const Calculator = () => {
  //   const { value } = useGlobalContext();
  return (
    <section className="calculator">
      <CalcThemes />
      <CalcDisplay />
      <CalcKeys />
    </section>
  );
};
export default Calculator;
