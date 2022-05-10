import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders selection menu on click", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
