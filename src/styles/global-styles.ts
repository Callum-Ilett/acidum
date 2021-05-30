import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

	html {
		box-sizing: border-box;
		font-size: 62.5%;
	}

	*, *:before, *:after {
		box-sizing: inherit;
		margin: 0;
		padding: 0;
	}

	body{
		font-family: "Work Sans", sans-serif;
		font-weight: 300;
		font-size: 1.4rem;
		color: white;
		background: #04031b;
	}

	h1, h2, h3, h4, h5, h6 {
		font-family: "Teko";
    font-weight: 700;
		word-wrap: break-word;
	}

	h5 {
		font-size: 2.4rem;
	}

	p {
		margin-bottom: 1em;
	}

	img {
		max-width: 100%;
	}

	ul {
		list-style: none;
	}
`;

export default GlobalStyles;
