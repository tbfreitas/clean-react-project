import React from "react";

export default class CustomButtomClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Tarcísio",
    };
  }

  componentDidMount() {
    fetch("https://api.chucknorris.io/jokes/random").then((response) => {
      response.json().then((responseParsed) => {
        this.setState({
          name: JSON.stringify(responseParsed.icon_url),
        });
      });
    });
  }

  render() {
    return (
      <div className="class-example">
        <p>Olá, Boa tarde {this.state.name}</p>
        <img
          src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"
          alt="profile"
        />
      </div>
    );
  }
}
