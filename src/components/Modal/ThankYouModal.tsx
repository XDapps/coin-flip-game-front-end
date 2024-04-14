
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

interface Props {
	open: boolean;
	handleClose: () => void;
}
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function ThankYouModal(props: Props) {

	return (
		<div>
			<Modal
				open={props.open}
				onClose={props.handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h4" component="h4">
						Thank You!
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						I just wanted to say <b>Thank You</b> for checking out my game demo!
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>

						I love to solve problems, but I'm not much with css, so forgive the styling.

					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Have a great day,
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						<b> Jerry</b>
					</Typography>
				</Box>
			</Modal>
		</div>
	);
}
