import React from "react";
import "./Sidebar.css";

type Selected =
  | "sidebar--button"
  | "sidebar--typography"
  | "sidebar--anchor"
  | "sidebar--tab"
  | "sidebar--form"
  | "sidebar--table";

type SidebarProps = {
  callback: (id: Selected) => void;
  selected: Selected;
};

type SidebarOptions = {
  id: Selected;
  name: string;
};

export const Sidebar = ({ callback, selected }: SidebarProps) => {
  const sidebarOptions: SidebarOptions[] = [
    { id: "sidebar--typography", name: "Typography" },
    { id: "sidebar--button", name: "Button" },
    { id: "sidebar--anchor", name: "Anchors" },
    { id: "sidebar--tab", name: "Tab Navigation" },
    { id: "sidebar--form", name: "Form Elements" },
    { id: "sidebar--table", name: "Table" },
  ];

  return (
    <div className="main">
      <div className="sidebar">
        {sidebarOptions.map((option) => {
          return (
            <button
              key={option.id}
              id={option.id}
              className={`sidebar--option ${
                selected === option.id && "sidebar--active"
              }`}
              onClick={() => callback(option.id)}
            >
              {option.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
