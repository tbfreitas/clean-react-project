import React, { useEffect } from "react";

export default function CustomComponent(props) {
  const [name, setName] = React.useState("Tarcísio");
  const [isLoading, setIsLoading] = React.useState(true);
  const [apiResponse, setApiResponse] = React.useState([]);

  const getData = () => {
    fetch("https://api.chucknorris.io/jokes/random").then((response) => {
      response.json().then((responseParsed) => {
        setApiResponse(JSON.stringify(response));
        setIsLoading(false);
      });
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const updateName = (e) => {
    setName(e.target.name);
  };

  return (
    <div className="name-container">
      <p>{name}</p>
      {!isLoading ? <p>{apiResponse.url}</p> : <p>is loading</p>}
    </div>
  );
}
