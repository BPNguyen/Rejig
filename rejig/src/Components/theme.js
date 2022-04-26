import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		background: {
			anthracite: "#393d47",
			darkanthracite: "#292c33",
			navyblue: "#000034",
			beige: "#f8f8e7",
		},
		primary: {
			main: "#1da1f2",
			twitter: "#1da1f2",
			spotify: "#1db954",
			white: "#fff",
		},
		secondary: {
			main: "#fff",
			twitter: "#4c4e52",
			spotify: "#fff",
		},
	},
});

export default theme;
