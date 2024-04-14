/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
	Typography,
	TextField,
	Button,
	Radio,
	RadioGroup,
	FormControl,
	FormControlLabel,
	FormLabel,
	Paper,
	Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CoinFlipResult from "../CoinFlipResult/CoinFlipResult";
import { useAppDispatch } from "store/hooks/appDispatch";
import WagerHistory from "../WagerHistory/WagerHistory";
import { submitWager } from "actions/submit-wager";
import { RootState } from "store";

const CoinTossGame = () => {
	const user = useSelector((state: RootState) => state.login.user);
	const tokenBalance = useSelector((state: RootState) => state.tokens.tokenBalance);
	const [wagerAmount, setWagerAmount] = useState(0);
	const [predictionIsHeads, setPredictionIsHeads] = useState(true);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const dispatch = useAppDispatch();
	const history = useNavigate();

	const handleWagerChange = (event: any) => {
		setWagerAmount(Number(event.target.value));
	};

	const handleCoinSideChange = () => {
		setPredictionIsHeads(!predictionIsHeads);
	};

	const resetGame = () => {
		setWagerAmount(0);
		setIsSubmitted(false);
	}

	const handleSubmitWager = () => {
		if(!user) return;
		const wagerData = {
			email: user.email,
			wagerAmount: wagerAmount,
			predictionIsHeads: predictionIsHeads,
		};

		dispatch(submitWager(wagerData, history));
		dispatch({
			type: "SET_TOKEN_BALANCE",
			data: tokenBalance - wagerAmount,
		});
		setIsSubmitted(true);
	};

	return (
		<Paper
			elevation={3}
			sx={{ padding: 3, margin: "auto", maxWidth: 500, textAlign: "center" }}
		>
			{isSubmitted ? (
				<CoinFlipResult
					handlePlayAgain={resetGame}
				/>
			) : (
				<>
					<Typography variant="h4" gutterBottom color="primary">
						Balance: {tokenBalance.toLocaleString()}
					</Typography>
					<FormControl component="fieldset" sx={{ marginBottom: 2 }}>
						<FormLabel component="legend">Choose Heads or Tails</FormLabel>
						<RadioGroup row value={predictionIsHeads} onChange={handleCoinSideChange}>
							<FormControlLabel
								value={true}
								control={<Radio />}
								label="Heads"
							/>
							<FormControlLabel
								value={false}
								control={<Radio />}
								label="Tails"
							/>
						</RadioGroup>
					</FormControl>
					<Stack
						direction="row"
						spacing={2}
						justifyContent="center"
						alignItems="center"
						sx={{ marginBottom: 2 }}
					>
						<TextField
							label="Wager Amount"
							type="number"
							sx={{ minWidth: "175px" }}
							onChange={handleWagerChange}
							defaultValue={null}
							inputProps={{ min: 1, max: tokenBalance }}
						/>
						<Button
							onClick={handleSubmitWager}
							variant="contained"
							color="primary"
							disabled={wagerAmount < 1 || wagerAmount > tokenBalance}
						>
							{wagerAmount > tokenBalance
								? "Insufficient Tokens"
								: "Submit Wager"}
						</Button>
					</Stack>
					<WagerHistory />
				</>
			)}
		</Paper>
	);
};

export default CoinTossGame;
