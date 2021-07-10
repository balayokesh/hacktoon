// Import npm packages
import React, { useState} from 'react';
import { Link } from 'react-router-dom';

// Import Material-UI components
import { AppBar, Toolbar, CssBaseline, Container, Grid, Typography} from '@material-ui/core';
import useStyles from './assets/styles/style';

// Import assets
import logo from './assets/images/logo.png'

// Import custom components
import CardComponent from './Components/CardComponent.jsx';

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
						<Typography variant='h2' align='center'>
							<Link to='/game'>
								Play game
							</Link>				
						</Typography>
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
			</main>

			<footer className="footer">
				{/* To be filled later */}
			</footer>
        </>
    );
}

export default App;