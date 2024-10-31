import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import React from "react";

describe(`App`, () => {
  beforeEach(() => {
    // Pre-Arrange
    render(<App />);
  });

  it('should show My Recipes as a header', () => {
    const header = screen.getByRole('heading');

    expect(header).toHaveTextContent('My Recipes');
  })

  it('button should exist', () => {
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Add Recipe');
  })

});
