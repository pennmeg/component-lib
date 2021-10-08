import React, { useState } from "react";
import { Button } from "./components/Button.tsx";
import { Sidebar } from "./sections/Sidebar.tsx";
import "./App.css";

function App() {
  const [isSelected, setIsSelected] = useState("sidebar--typography");

  return (
    <div className="main">
      <Sidebar selected={isSelected} callback={(id) => setIsSelected(id)} />
      <div className="section">
        {isSelected === "sidebar--button" && (
          <Button theme="Primary" text="Hello World" />
        )}
      </div>
    </div>
  );
}

export default App;
