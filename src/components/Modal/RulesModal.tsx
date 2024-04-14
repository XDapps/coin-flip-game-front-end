import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import bullet from "../../assets/svg/bullet.svg";

interface Props {
	open: boolean;
	handleClose: () => void;
}

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 500,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function RulesModal(props: Props) {

	return (
		<div>
			<Modal
				open={props.open}
				onClose={props.handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h3" component="h4" sx={{ px: 2 }}>
						Rules
					</Typography>
					<Typography id="modal-modal-description" sx={{ p: 2 }}>
						You may wager up to your balance on a coin toss.
					</Typography>
					<Typography id="modal-modal-description" variant="h6" component="h6" sx={{ px: 2 }}>
						Bonus Payouts
					</Typography>
					<Typography id="modal-modal-description" sx={{ px: 2 }}>
						<ul className="custom-list">
							<li className="list-item">
								<img src={bullet} alt="bullet" />
								<span>3 consecutive wins receives a <b>3x payout</b></span>
							</li>
							<li className="list-item">
								<img src={bullet} alt="bullet" />
								<span>5 consecutive wins receives a <b>10x payout</b></span>
							</li>
							<li className="list-item">
								<img src={bullet} alt="bullet" />
								<span>Streaks are <b>reset</b> after 5 wins</span>
							</li>
						</ul>
					</Typography>
					<Typography id="modal-modal-description" sx={{ p: 2 }}>
						Good luck!
					</Typography>
				</Box>
			</Modal>
		</div>
	);
}
