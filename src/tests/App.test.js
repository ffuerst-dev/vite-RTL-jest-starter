import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import React from "react";

describe(`App`, () => {
  beforeEach(() => {
    // Pre-Arrange
    render(<App />);
  });

  it(`initializes with text 'Vite + React + Jest'`, () => {
    // Arrange
    const heading = screen.getByRole("heading");
    // Act
    // Assert
    expect(heading).toHaveTextContent("Vite + React + Jest");
  });

  it(`initializes counter at 0`, () => {
    // Arrange
    const counterText = screen.getByText(/Count is: /i);
    // Act
    // Assert
    expect(counterText).toHaveTextContent("Count is: 0");
  });

  it(`increments counter on button click`, () => {
    // Arrange
    const button = screen.getByRole("button");
    const counterText = screen.getByText(/Count is: /i);
    // Act
    fireEvent.click(button);
    // Assert
    expect(counterText).toHaveTextContent("Count is: 1");
  });

  it(`should fail, as the test is bad`, () => {
    // Arrange
    const button = screen.getByRole("button");
    const counterText = screen.getByText(/Count is: /i);
    // Act
    fireEvent.click(button);
    // Assert
    expect(counterText).toHaveTextContent("Count is: pikachu");
  });
});
