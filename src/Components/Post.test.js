import { render, screen } from "@testing-library/react";
import Post from "./Post";

describe("Post Component testing the layout", () => {
  test("renders a single subreddit item", () => {
    render(
      <Post
        post={{
          title: "This is the title",
          permalink: "",
          thumbnail: "",
        }}
      />
    );
    screen.debug();
  });
});
