import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";

describe("Rendering the Search Component", () => {
  test("renders Search component correctly", () => {
    const { queryByTestId, queryByDisplayValue } = render(
      <Search query={"reactjs"} limit={9} />
    );

    expect(queryByTestId("SearchBox")).toBeTruthy();
    expect(queryByTestId("prevBtn")).toBeTruthy();
    expect(queryByTestId("nextBtn")).toBeTruthy();
    expect(queryByTestId("results")).toBeTruthy();
    expect(queryByDisplayValue("reactjs")).toBeTruthy();
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
    // console.log(screen);
    screen.debug();
    // console.log(queryByTestId("SearchBox"));
  });
});

describe("on change handler should update search query", () => {
  test("it updates on change", () => {
    const { queryByTestId } = render(<Search query={"reactjs"} limit={9} />);
    const searchInput = queryByTestId("SearchBox");

    fireEvent.change(searchInput, { target: { value: "angularjs" } });
    expect(searchInput.value).toBe("angularjs");
  });
});

describe("prev and next buttons should update when clicked", () => {
  test("it will go to prev button", () => {});
});
