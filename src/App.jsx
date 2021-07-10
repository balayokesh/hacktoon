import React, { useState} from 'react';

const App = () => {
    return (

        <>
			<header className="header">
				<h3 className="logo">Mickey-Hacktoon</h3>
				<div className="participants">
					<h2>Monesh Goyal</h2>
					<h2>Bala Yokesh</h2>
					<h2>Cheng Yang</h2>
				</div>
			</header>

			<main className="main_div">
				<h1>Rules:</h1>
				
			    <h2>The objective is to collect the most pairs of cards.</h2>
				
				<h2>When the game starts, Shuffle the cards and lay them on the table, face down, in rows.</h2>

				<h2>On each turn, a player turns over any two cards (one at a time) and keeps them and gain one point if the cards match</h2>

				<h2>When a player turns over two cards that do not match, the game will be over.</h2>
				
				<h2>The trick is to remember which cards are where.</h2>
				
			</main>

			<footer className="footer">
				{/* To be filled later */}
			</footer>

        </>

    )
}

export default App;
