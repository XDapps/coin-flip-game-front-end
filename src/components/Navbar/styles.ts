import { deepPurple } from "@mui/material/colors";

export const styles = {
	appBar: {
		borderRadius: 15,
		margin: "30px 0",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "10px 50px",
		backgroundColor: "#ffffff", // Changed to white background
		boxShadow: "0 2px 8px rgba(0,0,0,0.1)", // Added shadow for depth
	},
	heading: {
		color: "#ffffff", // You can keep this color if it suits your design
		textDecoration: "none",
		fontSize: "1.5rem", // Set the font size for the logo
		fontWeight: 700, // Bold for the logo text
		//backgroundColor: "rgba(0,183,255, 0.1)", // Light blue background for the logo
		backgroundColor: "rgb(2,136,209)", // Light blue background for the logo
		padding: "10px 20px", // Padding for the logo text
		borderRadius: "20px", // Slightly rounded corners for the logo
	},
	toolbar: {
		display: "flex",
		justifyContent: "flex-end",
		width: "auto", // Adjust to auto to fit the contents
	},
	profileContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: "10px", // Use gap for spacing between elements
	},
	buttonsContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: "5px", // Use gap for spacing between buttons
	},
	userName: {
		marginLeft: "10px",
		color: "#333", // Dark grey for contrast
		fontWeight: "bold", // Bold for emphasis
	},
	button: {
		margin: "0", // Reset margin to 0 and use gap from containers
		padding: "8px 16px", // Comfortable padding
		textTransform: "uppercase", // Uppercase for a button-like look
		fontWeight: "bold", // Bold to stand out
		borderRadius: "4px", // Slightly rounded corners
		// Add a background color transition effect in your component's style prop if possible, as MUI's sx prop doesn't support pseudo-classes
	},
	brandContainer: {
		display: "flex",
		alignItems: "center",
	},
	purple: {
		color: "#ffffff", // White text for contrast on avatar
		backgroundColor: deepPurple[500], // Deep purple color for the avatar background
	},
};
