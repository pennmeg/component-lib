import React from "react";
import styled from "styled-components";

const Text = styled.p`
  margin: 3px;
  padding: 0;
  font-size: 12px;
  text-transform: uppercase;
`;

const Wrapper = styled.div`
  display: flex;
  width: 30%;
  margin: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Color = styled.div`
  height: 50px;
  width: 50px;
`;

export const Colors = () => {
  const colorOptions = [
    { id: "white", hex: "#FFFFFF" },
    { id: "gray", hex: "#636363" },
    { id: "purple", hex: "#848CC5" },
    { id: "blue", hex: "#96b9e7" },
    { id: "green", hex: "#7fd2cc" },
  ];
  return (
    <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
      {colorOptions.map((color) => {
        return (
          <Wrapper key={color.id}>
            <Color style={{ backgroundColor: color.hex }}></Color>
            <Text>{color.id}</Text>
            <Text>Hex: {color.hex}</Text>
          </Wrapper>
        );
      })}
    </div>
  );
};
