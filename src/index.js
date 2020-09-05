import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App, { x_value } from "./App";
import { BrowserRouter as Router } from "react-router-dom";

// Few words on import
// import App from "./App";
// Because of the export default you don't need { App} and can do App
// You can import functions, classes and variables
// This is a mix of default and others (App is default but x_value is also in the ./App)
// import App, {x_value} from "./App";

console.log("x_value in html.js " + x_value);

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
