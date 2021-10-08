import React from "react";
import styled from "styled-components";

type ButtonProps = {
  text: string;
  theme?: "Primary" | "Secondary";
};

const A = styled.button`
  background: ${(theme) => (theme.primary ? "palevioletred" : "white")};
  color: ${(theme) => (theme.primary ? "white" : "#636363")};
  border: ${(theme) => (theme.primary ? "#DDDDDD" : "#DDDDDD")} 1px solid;
  border-radius: 8px;
  padding: 1.25em;
  font-size: 18px;

  :hover {
    background: ${(props) => (props.primary ? "palevioletred" : "#dedede")};
  }
`;

export const Button = ({ text, theme }: ButtonProps) => {
  return <A theme={theme}>{text}</A>;
};
