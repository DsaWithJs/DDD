import React from "react";
import { createRoot } from "react-dom"; // This will use our mock
import App from "./App"; // Import your App component

// Mocking module before importing the file that contains the bootstrapping code
jest.mock("react-dom", () => ({
  createRoot: jest.fn().mockReturnValue({
    render: jest.fn(),
  }),
}));

describe("Application Bootstrap", () => {
  it("mounts <App /> to the DOM correctly", () => {
    // Setup
    const getElementByIdMock = jest.spyOn(document, "getElementById").mockImplementation(() => document.createElement("div"));

    // Execute
    require("./index"); // Assuming the bootstrap code is in index.ts

    // Assert
    expect(getElementByIdMock).toHaveBeenCalledWith("app");
    expect(createRoot).toHaveBeenCalled();
    expect(createRoot().render).toHaveBeenCalledWith(<App />);

    // Cleanup
    getElementByIdMock.mockRestore();
  });
});
