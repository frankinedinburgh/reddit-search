import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders learn react link", () => {
    render(<App />);
    // console.log()
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
    console.log(screen);
    screen.debug();
  });
});
