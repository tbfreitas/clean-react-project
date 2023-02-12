import logo from "./logo.svg";
import "./App.css";

import { createContext, useState } from "react";

import Custom from "./components/custom-component";
import CustomButtomClass from "./components/custom-component-class";

export const ThemeContext = createContext("light");

function App() {
  const [isOriginal, setIsOriginal] = useState("TATAZINHO");

  return (
    <ThemeContext.Provider name={isOriginal}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div>
            <Custom />
            <CustomButtomClass />
            <p>Testando</p>
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
