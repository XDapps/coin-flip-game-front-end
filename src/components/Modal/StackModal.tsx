import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal"; 
import Box from "@mui/material/Box";
import github from "../../assets/svg/github.svg";
import mongo from "../../assets/svg/mongo.svg";
import react from "../../assets/svg/react.svg";
import firebase from "../../assets/svg/firebase.svg";
import express from "../../assets/svg/express.svg";
import jwt from "../../assets/svg/jwt.svg";
import railway from "../../assets/svg/railway.svg";

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

export default function StackModal(props: Props) {

	return (
		<div>
			<Modal
				open={props.open}
				onClose={props.handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h4" component="h4" sx={{ px: 2 }}>
						Tech Stack
					</Typography>
					<Typography id="modal-modal-description" sx={{ p: 2 }}>
						This is a demo application and is not meant for production. It was built using the following technologies:
					</Typography>
					<Typography id="modal-modal-description" sx={{ px: 2 }}>
						<ul className="custom-list">
							<li className="list-item-stack">
								<img src={react} alt="bullet" />
								<span><b>React.Js:</b> front end U/I in Typescript.</span>
							</li>
							<hr />
							<li className="list-item-stack">
								<img src={mongo} alt="bullet" />
								<span><b>MongoDB:</b> database layer.</span>
							</li>
							<hr />
							<li className="list-item-stack">
								<img src={express} alt="bullet" />
								<span><b>Express.js:</b> back-end API in Typescript.</span>
							</li>
							<hr />
							<li className="list-item-stack">
								<img src={jwt} alt="bullet" />
								<span><b>JWT:</b> auth.</span>
							</li>
							<hr />
							<li className="list-item-stack">
								<img src={firebase} alt="bullet" />
								<span><b>Firebase:</b> hosting the front end.</span>
							</li>
							<hr />
							<li className="list-item-stack">
								<img src={railway} alt="bullet" />
								<span><b>Railway:</b> hosting the back end.</span>
							</li>
							<hr />
							<li className="list-item-stack">
								<img src={github} alt="bullet" />
								<span><b>Code:</b> <a href="https://github.com/XDapps/coin-flip-game-back-end" target="_blank">view the code.</a></span>
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
