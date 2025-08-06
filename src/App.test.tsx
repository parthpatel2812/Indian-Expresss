import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

// Mock ResizeObserver for the test environment
beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as any;
});

test("renders INDIAN EXPRESSS LLC text", () => {
  render(<App />);
  const titleElement = screen.getByText(/INDIAN EXPRESSS LLC/i);
  expect(titleElement).toBeInTheDocument();
});
