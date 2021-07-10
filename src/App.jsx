import React, { useState} from 'react';

// Import Material-UI components
import { CssBaseline, Container, Card, CardMedia, CardContent, CardActions, Button, Typography, Grid } from '@material-ui/core';

// Import assets
import logo from './assets/images/logo.png'

// Import custom components
import CardComponent from './Components/CardComponent.jsx';

const App = () => {
    return (
        <>
			<CssBaseline />
			<header className="header">
				<img src={logo} alt='mickey logo' />
				<h3 className="logo">Mickey-Hacktoon</h3>
				<div className="participants">
					<h2>Monesh Goyal</h2>
					<h2>Bala Yokesh</h2>
					<h2>Cheng Yang</h2>
				</div>
			</header>

			<main className="main_div">
				<div>
					<h1>Rule:</h1>
					<h1>The objective is to collect the most pairs of cards.</h1>
					<h1>When the game starts, Shuffle the cards and lay them on the table, face down, in rows.</h1>
					<h1>On each turn, a player turns over any two cards (one at a time) and keeps them and gain one point if the cards match</h1>
					<h1>When a player turns over two cards that do not match, the game will be over.</h1>
					<h1>The trick is to remember which cards are where.</h1>
				</div>
				<div>
					<Container maxWidth='md'>
						<Grid container>
							<Grid item>
								<CardComponent 
									image='https://source.unsplash.com/random'
									title='test title'
								/>
								<CardComponent 
									image='https://source.unsplash.com/random'
									title='test title'
								/>
							</Grid>	
						</Grid>	
					</Container>
				</div>
			</main>

			<footer className="footer">
				{/* To be filled later */}
			</footer>

        </>
    )
}

export default App;