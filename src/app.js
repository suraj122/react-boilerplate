import _ from "lodash";
import "../style/style.scss";
import React from "react";
import * as ReactDOM from "react-dom/client";

const username = "Abhishek";

function App() {
  return <h1>Hello {username}</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
