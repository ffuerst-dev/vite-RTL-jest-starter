import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import React from "react";

describe(`App`, () => {
  beforeEach(() => {
    // Pre-Arrange
    render(<App />);
  });

  it(`initializes with text 'Vite + React'`, () => {
    // Act
    // Assert
    expect(screen.getByRole("heading")).toHaveTextContent("Vite + React");
  });

  it(`increments counter on button click`, () => {
    // Arrange
    const button = screen.getByRole("button");
    const counterText = screen.getByText(/Count is: /i);

    expect(counterText).toHaveTextContent("Count is: 0");
    // Act
    fireEvent.click(button);
    // Assert
    expect(counterText).toHaveTextContent("Count is: 1");
  });
});
