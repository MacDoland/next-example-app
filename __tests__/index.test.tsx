import Home from "../src/pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

jest.mock("utils/cachedFetch");

describe("Home", () => {
  it("renders Pokecard", () => {
    render(<Home pokemon={{data: [
      {
        id: 1,
        name: 'testamon',
        description: 'test',
        imageurl: ''
      }
    ]}} />);
    expect(screen.getByText("testamon")).toBeInTheDocument();
  });
});
