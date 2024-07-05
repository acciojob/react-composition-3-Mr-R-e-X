import React from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      <div style={{ padding: "50px" }}>
        <Tooltip text="This is tooltip">
          <h1 style={{ textDecoration: "underline" }}>Hover Me</h1>
        </Tooltip>
      </div>
      <div style={{ padding: "50px" }}>
        <Tooltip text="This is another tooltip">
          <p style={{ textDecoration: "underline" }}>
            Hover me to see another tooltip
          </p>
        </Tooltip>
      </div>
    </div>
  );
};

export default App;
