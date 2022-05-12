/** @jest-environment jsdom */

import { screen } from "@testing-library/react";
import Repo from ".";
import { MemoryRouter } from "react-router-dom";

const fakeShow = {
  name: "My Little Pony: Making your Mark",
  summary: "A really good show",
  rating: 10,
  image: "",
};

describe("Repo", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Repo
          name={fakeShow.name}
          summary={fakeShow.summary}
          rating={fakeShow.rating}
          image={fakeShow.image}
        />
      </MemoryRouter>
    );
  });
  test("Dispalys a heading with specific text", () => {
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(head.textContext).toBe("My Little Pony: Making your Mark");
  });
});
