import React from "react";
import styled from "styled-components";

type ButtonProps = {
  description: string;
  theme?: "Primary" | "Secondary";
  icon: string | Node;
};

const Button = styled.button`
  padding: 0.75em;
  font-size: 18px;
  color: #636363;
  background-color: white;
  border-color: #dddddd;
  border-width: 1px;
  border-style: solid;
  border-radius: 100%;

  :hover {
    background-color: #f7f7f7;
    cursor: pointer;
  }
`;

export const IconButton = ({ theme, description, icon }: ButtonProps) => {
  return (
    <Button aria-label={description} theme={theme}>
      {icon}
    </Button>
  );
};
