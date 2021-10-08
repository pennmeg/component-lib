import React, { Fragment } from "react";
import { Button } from "../components/Button";
import { Colors } from "../components/Colors";
import { IconButton } from "../components/IconButton";
import { Selected } from "../utils/Types";
import "./Sections.css";
import { sidebarOptions } from "./Sidebar";

type SidebarProps = {
  selected: Selected;
};

export const ComponentSection = ({ selected }: SidebarProps) => {
  const subHeader = sidebarOptions.find((option) => option.id === selected);

  return (
    <div className="section">
      <h1>Component Library</h1>
      <h2>{subHeader?.name}</h2>
      {selected === "sidebar--button" && (
        <Fragment>
          <Button text="Hello, Primary Button!" theme="Primary" />
          <Button text="Hello, Secondary Button!" theme="Secondary" />
          <IconButton icon={`♥`} description="Love" />
        </Fragment>
      )}
      {selected === "sidebar--colors" && <Colors />}
    </div>
  );
};
