/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface InputProps {
	name: string;
	value?: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	label: string;
	half: boolean;
	autoFocus?: boolean;
	type: string;
	handleShowPassword?: (e: any) => void;
}

const Input = (props: InputProps) => (
	<Grid item xs={12} sm={props.half ? 6 : 12}>
		<TextField
			name={props.name}
			onChange={props.handleChange}
			variant="outlined"
			required
			fullWidth
			label={props.label}
			autoFocus={props.autoFocus}
			type={props.type}
			value={props.value}
			InputProps={
				props.name === "password" || props.name === "oldPassword"
					? {
						endAdornment: (
							<InputAdornment position="end">
								<IconButton onClick={props.handleShowPassword}>
									{props.type === "password" ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						),
					}
					: undefined
			}
		/>
	</Grid>
);

export default Input;
