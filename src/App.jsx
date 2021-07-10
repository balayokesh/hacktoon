// Import npm packages
import React, { useState} from 'react';
import { Link } from 'react-router-dom';

// Import Material-UI components
import { AppBar, Toolbar, CssBaseline, Container, Grid, Typography, Card, CardContent, CardActions, Button } from '@material-ui/core';
import useStyles from './assets/styles/style';

// Material Icons
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

// Import assets
import logo from './assets/images/logo.png';
import backgroundImage from './assets/images/backgroundImage.jpg';

// Import custom components
import CardComponent from './Components/CardComponent.jsx';

const App = () => {
	const classes = useStyles();
    return (
        <div>
			<CssBaseline />
			<AppBar className={classes.NavBar}>
				<Toolbar>
				<img src={logo} className={classes.Logo} alt='mickey logo' />
				<Typography variant='h3'>
					Mickey Hacktoon
				</Typography>
				</Toolbar>
			</AppBar>

			<main className="main_div">
				<div className={classes.Div} style={{paddingTop: '20vh'}}>
					<Grid container spacing={4}>
						<CardComponent 	
							image='https://media.tenor.com/images/cd00080ba0fd57ad0bce235519c96962/tenor.gif'
							title='First star on Hollywood walk of fame'
							description='Mickey mouse is the first cartoon character who received a star on the Hollywood walf of fame'
						/>
						<CardComponent 
							image='https://media.tenor.com/images/9c3a07f1220085f8fe461f0a161a972f/tenor.gif'
							title='How tall is Mickey?'
							description='Mickeys estimated height is 2 feet and 3 inches.  And his estimated weight is 23 pounds'
						/>
						<CardComponent 
							image='https://media1.tenor.com/images/4390dff2b1976f1dad4da5b5ab2e474f/tenor.gif?itemid=15538485'
							title='Mickey and Minnie'
							description='Mickey and Minnie have never been married in any of their onscreen appearances'
						/>
					</Grid>					
				</div>

				<h1 style={{textAlign: 'center'}} onClick={ () => {window.location.href = '#section2'}} id='section2'>
					<ArrowDropDownCircleIcon style={{fontSize: '2em'}} size='large' />
				</h1>

				<div className={classes.Div} style={{background: `url(${backgroundImage})`, backgroundSize: 'cover'}}>
					<Card className={classes.Section2}>
						<CardContent>
							<Typography variant='h2' >
								We implemented a fun game for you.  Give it a try
							</Typography>
						</CardContent>
						<CardActions>
							<Button variant='contained' color='primary' size='large'>
								<Link to='/game' style={{textDecoration: 'none', color: '#fff'}}>
									Play game
								</Link>				
							</Button>
						</CardActions>
					</Card>
				</div>

				<Container className={classes.Div}>
					<Typography variant='h2'>
						About Mickey Mouse:
					</Typography>
				</Container>				

				<Container className={classes.Div}>
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
			</main>

			<footer className="footer">
				{/* To be filled later */}
			</footer>
        </div>
    );
}

export default App;