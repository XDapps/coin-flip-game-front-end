
import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SET_TOKEN_BALANCE } from "@constants/actionTypes";
import { useAppDispatch } from "store/hooks/appDispatch";
import * as messages from "../../messages";
import { RootState } from "store";
import "./CoinFlip.css";


interface CoinFlipResultProps {
	handlePlayAgain: () => void;
}

const CoinFlipResult = (props: CoinFlipResultProps) => {
	const isFlipping = useSelector((state: RootState) => state.wager.isFlipping);
	const predictionIsHeads = useSelector((state: RootState) => state.wager.predictionIsHeads);
	const resultIsHeads = useSelector((state: RootState) => state.wager.resultIsHeads);
	const wagerAmount = useSelector((state: RootState) => state.wager.wagerAmount);
	const payoutAmount = useSelector((state: RootState) => state.wager.payoutAmount);
	const newBalance = useSelector((state: RootState) => state.wager.newBalance);
	const [resultPending, setResultPending] = useState(true);
	const dispatch = useAppDispatch();

	useEffect(() => {
		let flipTimeout: NodeJS.Timeout;
		const checkFlip = async () => {
			try {
				flipTimeout = setTimeout(() => {
					if (!isFlipping && resultPending) {
						setResultPending(false);
						if (payoutAmount > 0) {
							messages.success("Congratulations, You Won!");
						} else {
							messages.error("Sorry, You Lost! Try Again!");
						}

						dispatch({
							type: SET_TOKEN_BALANCE,
							data: newBalance,
						});
					}
				}, 3000);
			} catch (error) {
				console.error("Error with the coin flip:", error);
			}
		};
		checkFlip();
		return () => {
			clearTimeout(flipTimeout);
		};
	}, [isFlipping]);

	return (
		<div className="container">
			<div className="coin-container">
			<div
				className={`coin ${resultPending ? "flipping" : resultIsHeads ? "heads" : "tails"}`}
				/></div>
			<div>
				{resultPending || (
					<Typography>
						<div className="result-row">
							<div className="result-column">Guess:</div>
							<div className="result-column"> {predictionIsHeads ? " Heads" : " Tails"}</div>
						</div>
					</Typography>
				)}
				{resultPending || (
					<Typography>
						<div className="result-row">
							<div className="result-column">Result:</div>
							<div className="result-column"> {resultIsHeads ? " Heads" : " Tails"}</div>
						</div>
					</Typography>
				)}
				{resultPending || (
					<Typography
						sx={{
							color: resultIsHeads === predictionIsHeads ? "green" : "red",
						}}
					>
						{resultIsHeads === predictionIsHeads
							? `You Win!  ${payoutAmount} Tokens`
							: "Sorry, Try Again"}
					</Typography>
				)}
				{resultPending || (
					<Typography>
						{payoutAmount > wagerAmount * 2 ? "You Won a Bonus!" : ""}
					</Typography>
				)}
				{resultPending || (
					<Button onClick={props.handlePlayAgain} sx={{margin:"7px"}} variant="contained" color="primary">
						Play Again
					</Button>
				)}
			</div>
		</div>
	);
};
export default CoinFlipResult;
