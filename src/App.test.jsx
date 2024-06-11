import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app component", () => {
  render(<App />);
  expect(screen.getByTestId("header")).toBeInTheDocument();
  expect(screen.getByTestId("body")).toBeInTheDocument();
  expect(screen.getByTestId("footer")).toBeInTheDocument();
  expect(screen.getByTestId("home-button")).toBeInTheDocument();
});
