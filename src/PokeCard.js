import React, { Component } from "react";

class PokeCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokeName: "",
      pokeType: [],
      pokeHp: 0,
      pokeAttk: 0,
      pokeDef: 0
    };
  }

  render() {
    return <div className="cardContainer" />;
  }
}

export default PokeCard;
