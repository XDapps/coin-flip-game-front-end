
import NavDropdownComponent from "@components/NavDropDown/NavDropdownComponent";
import { AppBar, Typography, Toolbar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUserTokenBalance } from "../../actions/token-balance";
import { useAppDispatch } from '../../store/hooks/appDispatch';
import * as actionType from "../../constants/actionTypes";
import { RootState } from "store";
import { styles } from "./styles";

const Navbar = () => {
	const user = useSelector((state: RootState) => state.login.user);
	const dispatch = useAppDispatch();
	const history = useNavigate();

	const logout = () => {
		dispatch({ type: actionType.LOGOUT });
		history("/auth");
	};

	useEffect(() => {
		if (user !== null && user.exp) {
			if (user.exp as number * 1000 < new Date().getTime()) logout();
		}
		if (user!== null && user.email) {
			dispatch(loadUserTokenBalance(user.email as string));
		}
	}, [user]);

	return (
		<AppBar sx={styles.appBar} position="static" color="inherit">
			<div>
				<Typography
					component={Link}
					to="/"
					sx={styles.heading}
					variant="h5"
					align="center"
				>
					Coin Toss Game
				</Typography>
			</div>
			<Toolbar sx={styles.toolbar}>
				{user !== null && (
					<div>	
						<div style={styles.buttonsContainer}>
							<NavDropdownComponent />
						</div>
					</div>
				) }
			</Toolbar>
		</AppBar >
	);
};

export default Navbar;
