import React, { Component } from "react";

class Oi extends Component {
  state = {
    name: "Danyel",
    age: 22,
    eat: "Feijoada",
    song: ["Pitty", "Racionais", "O Rappa"]
  };

  render() {
    return (
      <section>
        <div>
          <h1>{this.state.name} </h1>
          <h2>{this.state.age} </h2>
          <h3>{this.state.eat} </h3>
          <ol>
            <li>{this.state.song[0]} </li>
            <li>{this.state.song[1]} </li>
            <li>{this.state.song[2]} </li>
          </ol>
        </div>
      </section>
    );
  }
}

export default Oi;
