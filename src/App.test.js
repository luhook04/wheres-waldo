import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("App", () => {
  it("toggles selection menu on image click", () => {
    render(<App />);
    const image = screen.getByRole("img");

    expect(
      screen.queryByRole("heading", { name: "Waldo" }, { level: 3 })
    ).not.toBeInTheDocument();

    userEvent.click(image);

    expect(
      screen.getByRole("heading", { name: "Waldo" }, { level: 3 })
    ).toBeInTheDocument();

    userEvent.click(image);

    expect(
      screen.queryByRole("heading", { name: "Waldo" }, { level: 3 })
    ).not.toBeInTheDocument();
  });
});
