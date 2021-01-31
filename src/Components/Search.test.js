import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/user-event";
import Search from "./Search";

describe("Search Component", () => {
  test("renders learn react link", () => {
    render(<Search />);
    const { getByText } = render();
    // console.log()
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
    console.log(screen);
    screen.debug();
  });
});
