import React from "react";

import theme from "./theme.js";

import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function Header() {
	return (
		<ThemeProvider theme={theme}>
			<Box
				display='flex'
				sx={{
					// bgcolor: "background.darkanthracite",
					// border: 1,
					// borderColor: "secondary.spotify",
					// borderRadius: 8,
					padding: 2,
				}}
			>
				<Typography
					variant='h1'
					sx={{
						fontWeight: "medium",
						letterSpacing: 1,
						color: "primary.twitter",
					}}
				>
					Re
				</Typography>
				<Typography
					variant='h1'
					sx={{
						fontWeight: "medium",
						letterSpacing: 1,
						color: "primary.spotify",
					}}
				>
					Jig
				</Typography>
			</Box>
			<Box>
				<Typography
					variant='h5'
					sx={{
						color: "secondary.spotify",
					}}
				>
					Curate a Spotify playlist from your favorite Tweet.
				</Typography>
			</Box>
		</ThemeProvider>
	);
}
