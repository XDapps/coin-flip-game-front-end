
import TableContainer from "@mui/material/TableContainer";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TableBody } from "@mui/material";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import { jwtDecode } from "jwt-decode";
import * as React from "react";
import { RootState } from "store";
import * as api from "../../api";

const WagerHistory = () => {
	const user = useSelector((state: RootState) => state.login.user);
	const initWagerHistory: Record<string, unknown>[] = [];
	const [wagerHistory, setWagerHistory] = React.useState(initWagerHistory);

	React.useEffect(() => {
		const loadWagerHistory = async () => {
			if (!user) {
				return;
			}
			const { data } = await api.wagerHistory({ email: user.email as string });
			const wagerHistoryDecoded = data.token ? jwtDecode(data.token) : "null";
			if (wagerHistoryDecoded === "null") {
				return;
			}
			const recentWagers = (wagerHistoryDecoded as Record<string, unknown>).recentWagers as Record<string, unknown>[];
			setWagerHistory(recentWagers as Record<string, unknown>[]);
		};
		loadWagerHistory();
	}, []);

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 300 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell align="center">Recent Wagers</TableCell>
						<TableCell align="center">Result</TableCell>
						<TableCell align="center">Payout</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{wagerHistory.map((row, i) => (
						<TableRow
							key={i}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell align="center">{row.amount as number} Tokens</TableCell>
							<TableCell
								align="center"
								sx={{ color: row.payoutAmount as number > 0 ? "green" : "red" }}
							>
								{row.flipWasHeads ? "Heads" : "Tails"}
							</TableCell>
							<TableCell
								align="center"
								sx={{ color: (row.payoutAmount as number) > (row.amount as number) * 2 ? "green" : "" }}
							>
								{(row.payoutAmount as number) > (row.amount as number) * 2 ? "Bonus " : ""}
								{(row.payoutAmount as number) === (row.amount as number) * 2 ? "Won " : ""}
								{row.payoutAmount as number} Tokens
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
export default WagerHistory;
