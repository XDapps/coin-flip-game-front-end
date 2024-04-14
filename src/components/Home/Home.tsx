import { Container, Grow, Paper, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useEffect } from "react";
import CoinTossGame from "../CoinTossGame/CoinTossGame";
import { RootState } from "store";

const Home = () => {
	const authData = useSelector((state: RootState) => state.login.authData);
	const user = useSelector((state: RootState) => state.login.user);
	const navigate = useNavigate();
	const isSignedIn = user;

	useEffect(() => {
		if (isSignedIn === null) {
			navigate('/auth');
		}
	}, [isSignedIn, navigate, authData]);

	return (
		<Grow in>
			<Container component="main" maxWidth="sm">
				<Paper elevation={3} className="main-container">
					{isSignedIn !== null ? (
						<CoinTossGame />
					) : (
						<Typography variant="h4" align="center" color="primary">
							Login to Play
						</Typography>
					)}
				</Paper>
			</Container>
		</Grow>
	);
};

export default Home;
