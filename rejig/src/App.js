import "./App.css";
import React from "react";

import theme from "./Components/theme.js";
import Header from "./Components/header.js";
import TweetForm from "./Components/tweetForm.js";

import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			{/* <head>
				<title>ReJig</title>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
				<meta
					name='description'
					content='Curate a Spotify playlist from your favorite Tweet.'
				/>
				<meta
					name='news_keywords'
					content='twitter,tweet,music,spotify,playlist,data'
				></meta>
			</head> */}
			<Box
				display='flex'
				flexDirection='column'
				alignItems='center'
				sx={{
					bgcolor: "background.navyblue",
					height: "100vh",
					alignContent: "center",
					textAlign: "center",
					padding: 2,
				}}
			>
				<Header />
				<TweetForm />
			</Box>
		</ThemeProvider>
	);
}
