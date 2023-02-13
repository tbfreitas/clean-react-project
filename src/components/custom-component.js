import React, {
  useEffect,
  useContext,
  useReducer,
  useCallback,
  useMemo,
} from "react";
import { ThemeContext } from "../App";

export default function CustomComponent({
  nameList = ["name", "teste", "Tarcisio"],
}) {
  const filterNames = (listNames) => {
    return listNames.filter((name) => name !== "name");
  };

  // check if prop changed the value (optmization)
  const visibleTodos = useMemo(() => filterNames(nameList), [nameList]);

  // Complex states
  const reducer = (state, action) => {
    switch (action.type) {
      case "incremented_age":
        return {
          age: state.age + 10,
        };
      default:
        return {
          age: state.age + 1,
        };
    }
  };

  // Context to bring the info name
  const context = useContext(ThemeContext);
  const [categories, setCategories] = React.useState([]);
  const [hardStuff, setHardStuff] = useReducer(reducer, {
    age: 0,
  });
  const [isLoading, setIsLoading] = React.useState(true);

  const submit = useCallback(async () => {
    return fetch("https://api.chucknorris.io/jokes/categories");
  }, []);

  // first call
  useEffect(() => {
    const testAsync = async () => {
      const response = await submit();
      const responseParsed = await response.json();
      setCategories(responseParsed);
      setIsLoading(false);
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
      {categories.map((ct) => {
        return (
          <p onMouseOver={MouseOver} onMouseOut={MouseOut}>
            {ct}
          </p>
        );
      })}
      {visibleTodos.map((vt) => {
        return <p>{vt}</p>;
      })}
      {!isLoading && <p>Carregando</p>}
    </div>
  );
}
