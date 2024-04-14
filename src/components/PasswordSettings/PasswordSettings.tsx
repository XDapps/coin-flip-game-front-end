import { useEffect, useState } from "react";
import {
	Avatar,
	Button,
	Container,
	Grid,
	Paper,
	Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/LockRounded";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { changePassword } from "../../actions/change-password";
import { useAppDispatch } from "store/hooks/appDispatch";
import Input from "../Login/Input";
import { styles } from "./styles";
import { RootState } from "store";

const PasswordSetting = () => {
	const user = useSelector((state: RootState) => state.login.user);
	const isSingedIn = user;
	const history = useNavigate();
	const initFormData: Record<string, string> = {
		oldPassword: "",
		newPassword: "",
		email: user?.email ? user.email : "",
	};
	const [showPassword, setShowPassword] = useState(false);
	const [changeFormData, setChangeFormData] = useState(initFormData);
	const dispatch = useAppDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setChangeFormData({ ...changeFormData, [e.target.name]: e.target.value });
	};

	const handleShowPassword = () => {
		setShowPassword((prevPassword) => !prevPassword);
	};

	const handleSubmitChange = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(changePassword(changeFormData, history));
	};

	useEffect(() => {
		if (isSingedIn === null) {
			history("/");
		}
	}, []);

	if (isSingedIn !== null) {
		return (
			<div>
				<Container component="main" maxWidth="xs">
					<Paper sx={styles.paper} elevation={3}>
						<Avatar sx={styles.avatar}>
							<LockIcon />
						</Avatar>
						<Typography variant="h5" color="primary">
							Set Password
						</Typography>
						<form onSubmit={handleSubmitChange}>
							<Grid container spacing={2}>
								<Typography
									variant="caption"
									color="error"
									align="center"
									sx={{ pt: 3, pl: 5, pr: 5}}
								>
									To change your password, enter your current password and your new password.
								</Typography>
								<Input
									name="oldPassword"
									label="Current Password"
									handleChange={handleChange}
									type={showPassword ? "text" : "password"}
									handleShowPassword={handleShowPassword}
									half={false}
								/>
								<Input
									name="newPassword"
									label="New Password"
									handleChange={handleChange}
									type="password"
									value={changeFormData.newPassword}
									half={false}
								/>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									color="primary"
									sx={{ ml:2, mt:2 }}
								>
									Change Password
								</Button>
							</Grid>
						</form>
					</Paper>
				</Container>
			</div>
		);
	} else {
		return <>No Access</>;
	}
};

export default PasswordSetting;
