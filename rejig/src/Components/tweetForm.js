import React, { useState } from "react";

import theme from "./theme.js";

import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { Typography } from "@mui/material";

export default function TweetForm() {
	const [tweetURL, setTweetURL] = useState("");

	const handleTweetURLChange = (event) => {
		setTweetURL(event.target.value);
	};

	const validateTweetURL = () => {
		let validTweetURLFlag = false;

		if (tweetURL == "") {
			setTweetURL(
				"https://twitter.com/juliashiplett/status/1515415801389625351?s=20&t=PO4R9DStrl_afkH5vZY_vw"
			);
            // Why doesn't `tweetURL` get updated before print to console?
			console.log("[onSubmit]: Default URL submitted (", tweetURL, ")");
		} else {
			// validTweetURLFlag = true;
			console.log("[onSubmit]: Valid URL submitted (", tweetURL, ")");
		}

		onSubmit();
	};

	const onSubmit = () => {
		// validTweetURLFlag
		// 	? (console.log("TRUE"))
		// 	: (console.log("FALSE"));
        alert(tweetURL);
	};

	return (
		<ThemeProvider theme={theme}>
			<Box
				component='form'
				noValidate
				autocomplete='off'
				width='100%'
				display='flex'
				flexDirection='column'
				alignItems='center'
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "flex-end",
						width: "100%",
						padding: 2,
					}}
				>
					{/* <TwitterIcon sx={{ color: "primary.twitter", ml: 2, my: 4 }} /> */}
					<TextField
						id='tweetURL-textfield'
						label='Gimme dat Tweet URL'
						type='url'
						placeholder='https://twitter.com/juliashiplett/status/1515415801389625351?s=20&t=PO4R9DStrl_afkH5vZY_vw'
						fullWidth
						variant='outlined'
						color='primary'
						focused
						inputProps={{ style: { color: "#fff" } }}
						sx={{ m: 2 }}
						value={tweetURL}
						onChange={handleTweetURLChange}
					/>
				</Box>
				<Button
					variant='contained'
					size='large'
					color='success'
					//startIcon={<MusicNoteIcon />}
					sx={{
						width: "30%",
						border: 1,
						borderColor: "secondary.spotify",
						boxShadow: 3,
						padding: 1.5,
						color: "secondary.spotify",
					}}
					onClick={validateTweetURL}
				>
					<TwitterIcon /> <ArrowForwardIcon /> <LibraryMusicIcon />
					{/* Get jiggy wit it. */}
				</Button>
			</Box>
		</ThemeProvider>
	);
}
