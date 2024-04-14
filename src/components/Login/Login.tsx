/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {
	Avatar,
	Button,
	Container,
	Grid,
	Paper,
	Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from '../../store/hooks/appDispatch';
import { login } from "../../actions/login";
import { signup } from "actions/sign-up";
import { styles } from "./styles";
import { RootState } from "store";
import Input from "./Input";

const formDataInitVal: Record<string, string> = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const Login = () => {
	const [formData, setFormData] = useState(formDataInitVal);
	const [showPassword, setShowPassword] = useState(false);
	const [isLogIn, setIsLogIn] = useState(true);
	const user = useSelector((state: RootState) => state.login.user);
	const dispatch = useAppDispatch();
	const history = useNavigate();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isLogIn) {
			dispatch(login(formData, history));
		} else {
			dispatch(signup(formData, history));
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleShowPassword = () => {
		setShowPassword((prevPassword) => !prevPassword);
	};

	const switchLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setIsLogIn((prevState) => !prevState);
	};

	useEffect(() => {
		if (user !== null) {
			history("/");
		}
	
	}, [user, history]);

		return (
			<div>
				<Container component="main" maxWidth="xs">
					<Paper sx={styles.paper} elevation={3}>
						<Avatar sx={styles.avatar}>
							{" "}
							<LockIcon />
						</Avatar>
						<Typography variant="h5" color="primary" sx={styles.title}>
							{isLogIn ? "Login" : "Logout"}
						</Typography>
						<form onSubmit={handleSubmit}>
							<Grid container spacing={2}>
								{!isLogIn && (
									<>
										<Input
											name="firstName"
											label="First Name"
											handleChange={handleChange}
											autoFocus
											half
											type="text"
										/>
										<Input
											name="lastName"
											label="Last Name"
											handleChange={handleChange}
											half
											type="text"
										/>
									</>
								)}

								<Input
									name="email"
									label="Email Address"
									handleChange={handleChange}
									type="email"
									half={false}
								/>
								<Input
									name="password"
									label="Password"
									handleChange={handleChange}
									type={showPassword ? "text" : "password"}
									handleShowPassword={handleShowPassword}
									half={isLogIn ? false : true}
									value={formData.password}
								/>
								{!isLogIn && (
									<>
										<Input
											name="confirmPassword"
											label="Confirm Password"
											handleChange={handleChange}
											type="password"
											half

										/>
									</>
								)}
							</Grid>
							<Button
								type="submit"
								sx={styles.submit}
								fullWidth
								variant="contained"
								color="primary"
							>
								{isLogIn ? "Login" : "Sign Up"}
							</Button>
							<Grid container justifyContent="flex-end">
								<Grid item>
									<Button onClick={switchLogin}>
										{isLogIn
											? "Don't Have An Account? Sign Up."
											: "Already Have An Account? Login."}
									</Button>
								</Grid>
							</Grid>
						</form>
					</Paper>
				</Container>
			</div>
		);
};

export default Login;
