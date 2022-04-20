import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const theme = createTheme({
	palette: {
		background: {
			darkanthracite: "#292C33",
		},
		primary: {
			main: "#1da1f2",
			twitter: "#1da1f2",
			spotify: "#1db954",
		},
		secondary: {
			main: "#fff",
			twitter: "#4c4e52",
			spotify: "#fff",
		},
	},
});

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
