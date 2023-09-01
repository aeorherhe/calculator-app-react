// import { useState } from "react";

import Calculator from "./components/Calculator";
import { GlobalProvider } from "./components/GlobalContext";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <GlobalProvider>
      <main className="main">
        <Calculator />
      </main>
    </GlobalProvider>
  );
}

export default App;
