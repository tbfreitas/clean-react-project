import React, { useEffect, useContext, useReducer, useCallback } from "react";
import { ThemeContext } from "../App";

export default function CustomComponent(props) {
  function reducer(state, action) {
    if (action.type === "incremented_age") {
      return {
        age: action.size,
      };
    }
    throw Error("Unknown action.");
  }

  const context = useContext(ThemeContext);
  const [categories, setCategories] = React.useState([]);
  const [hardStuff, setHardStuff] = useReducer(reducer, {
    age: 0,
  });
  const [isLoading, setIsLoading] = React.useState(true);
  const [apiResponse, setApiResponse] = React.useState([]);

  const submit = useCallback(async () => {
    return fetch("https://api.chucknorris.io/jokes/categories");
  }, []);

  useEffect(() => {
    const testAsync = async () => {
      const response = await submit();
      const responseParsed = await response.json();
      setCategories(responseParsed);
    };
    testAsync();
  }, [submit]);

  const MouseOver = (e) => {
    e.target.style.background = "blue";
  };

  const MouseOut = (e) => {
    e.target.style.background = "transparent";
  };

  const incrementAge = () => {
    setHardStuff({ type: "incremented_age" });
  };

  return (
    <div className="name-container" onClick={incrementAge}>
      {hardStuff.age}
      {context}
      {/* {categories.map((ct) => {
        return (
          <p onMouseOver={MouseOver} onMouseOut={MouseOut}>
            {ct}
          </p>
        );
      })} */}
      {!isLoading ? <p>{apiResponse.url}</p> : <p>is loading</p>}
    </div>
  );
}
