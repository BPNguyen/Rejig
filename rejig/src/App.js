import "./App.css";
import * as React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

const theme = createTheme({
	palette: {
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

export default function App() {
	function testAlert() {
		alert("Hello!");
	}

	return (
		// <div className='App'>
		// 	<div className='Header-container'>
		// 		<div className='Logo-text-container'>
		// 			<text className='Re-header-text'>Re</text>
		// 			<text className='Jig-header-text'>Jig</text>
		// 		</div>
		// 		<text className='Slogan-text'>Get jiggy wit it.</text>
		// 	</div>

		<ThemeProvider theme={theme}>
			<Box
				sx={{
					bgcolor: "secondary.twitter",
					height: "100vh",
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "flex-end",
						maxWidth: "85%",
					}}
				>
					<TwitterIcon sx={{ color: "primary.twitter", ml: 2, my: 4 }} />
					<TextField
						fullWidth='true'
						variant='outlined'
						id='tweet_url'
						label='Gimme dat Tweet URL.'
						placeholder='https://twitter.com/juliashiplett/status/1515415801389625351?s=20&t=PO4R9DStrl_afkH5vZY_vw'
						default='https://twitter.com/juliashiplett/status/1515415801389625351?s=20&t=PO4R9DStrl_afkH5vZY_vw'
						color='primary'
						sx={{
							m: 2,
							input: { color: "white" },
						}}
					/>
				</Box>
				
				<Button
					variant='contained'
					size='large'
					color='primary'
					startIcon={<MusicNoteIcon />}
					sx={{
						m: 2,
						// color: "secondary.spotify",
					}}
					onClick={testAlert}
				>
					Get jiggy wit it.
				</Button>

				<blockquote class='twitter-tweet' data-dnt='true' data-theme='light'>
					<p lang='en' dir='ltr'>
						What are your fav romcoms where the two people don’t end up together
						besides my best friend’s wedding
					</p>
					&mdash; julia (@juliashiplett){" "}
					<a href='https://twitter.com/juliashiplett/status/1515415801389625351?ref_src=twsrc%5Etfw'>
						April 16, 2022
					</a>
				</blockquote>{" "}
			</Box>
		</ThemeProvider>
	);
}
