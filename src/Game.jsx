// Import npm components
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

// Import Material UI components
import { Modal, Backdrop, Fade, makeStyles, Button } from '@material-ui/core';

// Import Material Icons
import HomeIcon from '@material-ui/icons/Home';

// Material styles
import "./assets/styles/cardStyle.css";
const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

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

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		if (openedCard < 2) return;

		const firstMatched = pairOfPokemons[openedCard[0]];
		const secondMatched = pairOfPokemons[openedCard[1]];

		if (secondMatched && firstMatched.id === secondMatched.id) {
			setMatched([...matched, firstMatched.id]);
		}

		if (openedCard.length === 2) setTimeout(() => setOpenedCard([]), 1000);
	}, [openedCard]);

	const classes = useState();
	return (

		<div className="App">

			<Link to='/'>
				<HomeIcon />
			</Link>

			<Button variant='contained' color='primary' onClick={handleOpen}>
				View Rules
			</Button>

			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						<h2 id="transition-modal-title">Rules:</h2>
						<p id="transition-modal-description">
							The objective is to collect the most pairs of cards.
							On each turn, a player turns over any two cards (one at a time) and keeps them and gain one point if the cards match
							When a player turns over two cards that do not match, the game will be over.
							The trick is to remember which cards are where.
							Click on the Cards
						</p>
					</div>
				</Fade>
			</Modal>


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
