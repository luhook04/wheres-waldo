import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const remainingCharacters = [
  { name: "Waldo" },
  { name: "Wenda" },
  { name: "Whitebeard" }
];

describe("App", () => {
  it("renders board on start button click", () => {
    render(<App />);

    expect(screen.queryByAltText("waldo-board")).not.toBeInTheDocument();
    const button = screen.getByRole("button", { name: "Start" });
    expect(button).toBeInTheDocument();

    userEvent.click(button);

    expect(screen.getByAltText("waldo-board")).toBeInTheDocument();
    expect(button).not.toBeInTheDocument();
  });

  it("toggles selection menu on image click", () => {
    render(<App />);

    const button = screen.getByRole("button", { name: "Start" });

    userEvent.click(button);

    const image = screen.getByAltText("waldo-board");

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
