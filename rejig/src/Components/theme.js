import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		background: {
			anthracite: "#393D47",
			darkanthracite: "#292C33",
			navyblue: "#000034",
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

export default theme;