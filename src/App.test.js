import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

// Testing is usually a full domain
// https://jestjs.io/docs/en/tutorial-react.html

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

test("renders learn react link", () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(getByText("Home")).toBeEnabled();
});
