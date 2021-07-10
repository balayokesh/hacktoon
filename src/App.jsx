import React, { useState} from 'react';

// Import Material-UI components
import { AppBar, Toolbar, CssBaseline, Container, Grid, Typography } from '@material-ui/core';
import useStyles from './assets/styles/style';

// Import assets
import logo from './assets/images/logo.png'

// Import custom components
import CardComponent from './Components/CardComponent.jsx';
import Cards from './Cards.jsx';

const App = () => {
	const classes = useStyles();
    return (
        <>
			<CssBaseline />
			<AppBar position='relative' className={classes.NavBar} >
				<Toolbar>
				<img src={logo} className={classes.Logo} alt='mickey logo' />
				<Typography variant='h3'>
					Mickey-Hacktoon
				</Typography>
				</Toolbar>
			</AppBar>

			<main className="main_div">
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

				<br />

				<div>
					<Container>
						<Typography variant='h2'>
							About Mickey Mouse:
						</Typography>
					</Container>
				</div>

				<br />

				<div>
					<Container>
						<Typography variant='h2'>
							Our team - Mickey
						</Typography>
						<Typography variant='subtitle1'>
							Monesh Goyal
						</Typography>
						<Typography variant='subtitle1'>
							Bala Yokesh Mani
						</Typography>
						<Typography variant='subtitle1'>
							Cheng Yang
						</Typography>
					</Container>
				</div>

				<div>
					<h1>Rule:</h1>
					<h1>The objective is to collect the most pairs of cards.</h1>
					<h1>When the game starts, Shuffle the cards and lay them on the table, face down, in rows.</h1>
					<h1>On each turn, a player turns over any two cards (one at a time) and keeps them and gain one point if the cards match</h1>
					<h1>When a player turns over two cards that do not match, the game will be over.</h1>
					<h1>The trick is to remember which cards are where.</h1>
					<h1>Rules:</h1>
				
					<h2>The objective is to collect the most pairs of cards.</h2>
					<h2>When the game starts, Shuffle the cards and lay them on the table, face down, in rows.</h2>
					<h2>On each turn, a player turns over any two cards (one at a time) and keeps them and gain one point if the cards match</h2>
					<h2>When a player turns over two cards that do not match, the game will be over.</h2>
					<h2>The trick is to remember which cards are where.</h2>
				</div>

				<Cards />
			</main>

			<footer className="footer">
				{/* To be filled later */}
			</footer>

        </>
    );
}

export default App;