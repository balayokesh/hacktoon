import React, { useState} from 'react';
<<<<<<< HEAD

// Import Material-UI components
import { CssBaseline, Container, Grid } from '@material-ui/core';
import useStyles from './assets/styles/style';

// Import assets
import logo from './assets/images/logo.png'

// Import custom components
import CardComponent from './Components/CardComponent.jsx';
=======
import Cards from './Cards';
>>>>>>> da3c4a5d0d1b631dc55ea809c5453c107b10a435

const App = () => {
	const classes = useStyles();
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
<<<<<<< HEAD
				<div>
					<Container>
						<Grid container spacing={4}>
							<CardComponent 
								image='https://source.unsplash.com/random'
								title='test title'
							/>
							<CardComponent 
								image='https://source.unsplash.com/random'
								title='test title'
							/>
							<CardComponent 
								image='https://source.unsplash.com/random'
								title='test title'
							/>
						</Grid>
					</Container>
				</div>

				<div>
					<h1>Rule:</h1>
					<h1>The objective is to collect the most pairs of cards.</h1>
					<h1>When the game starts, Shuffle the cards and lay them on the table, face down, in rows.</h1>
					<h1>On each turn, a player turns over any two cards (one at a time) and keeps them and gain one point if the cards match</h1>
					<h1>When a player turns over two cards that do not match, the game will be over.</h1>
					<h1>The trick is to remember which cards are where.</h1>
				</div>
=======
				<h1>Rules:</h1>
				
			    <h2>The objective is to collect the most pairs of cards.</h2>
				
				<h2>When the game starts, Shuffle the cards and lay them on the table, face down, in rows.</h2>

				<h2>On each turn, a player turns over any two cards (one at a time) and keeps them and gain one point if the cards match</h2>

				<h2>When a player turns over two cards that do not match, the game will be over.</h2>

				<h2>The trick is to remember which cards are where.</h2>

				<Cards />
				
>>>>>>> da3c4a5d0d1b631dc55ea809c5453c107b10a435
			</main>

			<footer className="footer">
				{/* To be filled later */}
			</footer>

        </>

    )
}

export default App;
