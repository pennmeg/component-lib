import React from "react";
import styled from "styled-components";

type ButtonProps = {
  text: string;
  theme?: "Primary" | "Secondary";
};

const A = styled.button`
  background-color: ${(props) => (props.theme.primary ? "white" : "#7fd2cc")};
  border-radius: 8px;
  padding: 1.25em;
  font-size: 18px;
`;

export const Typography = ({ text, theme }: ButtonProps) => {
  return <A theme={theme}>{text}</A>;
};
