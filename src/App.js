import React, { useState } from "react";
import { Sidebar } from "./sections/Sidebar.tsx";
import { ComponentSection } from "./sections/ComponentSection.tsx";
import "./App.css";

function App() {
  const [isSelected, setIsSelected] = useState("sidebar--colors");

  return (
    <div className="main">
      <Sidebar selected={isSelected} callback={(id) => setIsSelected(id)} />
      <ComponentSection selected={isSelected} />
    </div>
  );
}

export default App;
