import React from "react";
import styled from "styled-components";

type ButtonProps = {
  text: string;
  theme?: "Primary" | "Secondary";
};

const TextButton = styled.button`
  padding: 0.75em 1.25em;
  margin: 8px;
  font-size: 18px;
  color: ${(props) => (props.theme === "Primary" ? "white" : "#636363")};
  background-color: ${(props) =>
    props.theme === "Primary" ? "#7fd2cc" : "white"};
  border-color: ${(props) =>
    props.theme === "Primary" ? "#7fd2cc" : "#dddddd"};
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;

  :hover {
    background-color: ${(props) =>
      props.theme === "Primary" ? "#8ad6d1" : "#F7F7F7"};
    cursor: pointer;
  }
`;

export const Button = ({ text, theme }: ButtonProps) => {
  return <TextButton theme={theme}>{text}</TextButton>;
};
