import { render, screen, test, expect } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders app component", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  // Assuming there is some text "learn react" to test for
  const linkElement = screen.getByText(/"Bridging teams together"/i);
  expect(linkElement).toBeInTheDocument();
});
