import Login from "../src/pages/login";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Login", () => {
  it("renders username field", () => {
    render(<Login />);
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
  });
});
