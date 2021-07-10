// Import npm components
import React, { useEffect, useState } from "react";
import "./assets/styles/cardStyle.css"
import { Link } from 'react-router-dom';

const url = "https://pokeres.bastionbot.org/images/pokemon";

const Game = () => {
  const [openedCard, setOpenedCard] = useState([]);
  const [matched, setMatched] = useState([]);

  const pokemons = [
    { id: 1, name: "balbasaur" },
    { id: 8, name: "wartotle" },
    { id: 9, name: "blastoise" },
    { id: 6, name: "charizard" }
  ];

  //currently there are 4 pokemons but we need the pair

  const pairOfPokemons = [...pokemons, ...pokemons];

  function flipCard(index) {
    setOpenedCard((opened) => [...opened, index]);
  }

  useEffect(() => {
    if (openedCard < 2) return;

    const firstMatched = pairOfPokemons[openedCard[0]];
    const secondMatched = pairOfPokemons[openedCard[1]];

    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatched([...matched, firstMatched.id]);
    }

    if (openedCard.length === 2) setTimeout(() => setOpenedCard([]), 1000);
  }, [openedCard]);

  return (
    <div className="App">

      <Link to='/'>
        Back to Homepage
      </Link>

      <div>
					<h1>Rule:</h1>
					<h1>The objective is to collect the most pairs of cards.</h1>
					<h1>On each turn, a player turns over any two cards (one at a time) and keeps them and gain one point if the cards match</h1>
					<h1>When a player turns over two cards that do not match, the game will be over.</h1>
					<h1>The trick is to remember which cards are where.</h1>

          <h1>Click on the Cards - </h1>
					
				
					
				</div>
      <div className="cards">
        {pairOfPokemons.map((pokemon, index) => {
          //lets flip the card

          let isFlipped = false;

          if (openedCard.includes(index)) isFlipped = true;
          if (matched.includes(pokemon.id)) isFlipped = true;
          return (
            <div
              className={`pokemon-card ${isFlipped ? "flipped" : ""} `}
              key={index}
              onClick={() => flipCard(index)}
            >
              <div className="inner">
                <div className="front">
                  <img
                    src={`${url}/${pokemon.id}.png`}
                    alt="pokemon-name"
                    width="100"
                  />
                </div>
                <div className="back"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Game;
