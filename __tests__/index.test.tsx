import Home from "../src/pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Home", () => {
  it("renders HelloWorld", () => {
    render(<Home />);
    const target = screen.getByText("Hello World");
    expect(target).toBeInTheDocument();
  });
});
