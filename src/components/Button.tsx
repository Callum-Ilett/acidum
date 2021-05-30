import styled from "styled-components";

interface Props {
  colour: "primary" | "secondary";
  size?: "small";
}

const Button = styled.button<Props>`
  all: unset;
  padding: ${({ size }) => (size === "small" ? "0.5em 2em" : "1em 4em")};

  background: ${({ theme, colour }) =>
    colour == "primary" ? theme.primary : theme.secondary};

  color: ${({ colour }) => (colour == "primary" ? "white" : "#03051a")};

  font-family: "Teko", sans-serif;
  cursor: pointer;
  font-size: 1.8rem;
`;

export default Button;
