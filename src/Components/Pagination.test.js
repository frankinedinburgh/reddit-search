import { render, screen } from "@testing-library/react";
import { logRoles } from "@testing-library/dom";
import { fireEvent } from "@testing-library/user-event";
import Pagination from "./Pagination";

describe("Pagination Component", () => {
  test("renders the prev and next buttons beside the search input", () => {
    render(
      <Pagination
        prev={false}
        next={true}
        onPrevHandler={() => {}}
        onNextHandler={() => {}}
      />
    );
    const { getByTestId } = render();
    const nextBtn = screen.getByTestId("prevBtn");
    logRoles(nextBtn);

    fireEvent(
      screen.getByTestId("prevBtn", "Click"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    // console.log()
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
    console.log(nextBtn);
    // screen.debug();
  });
});
