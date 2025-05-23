import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Board from "./Board";
import { sendRequest } from "../../data/data";
import { N } from "../../constants";

// Mock sendRequest
jest.mock("../../data/data", () => ({
  sendRequest: jest.fn(),
}));

// Mock constants
jest.mock("../../constants", () => ({
  N: 3, // example board size
}));

// Mock Cell component to simplify click handling
// eslint-disable-next-line react/display-name
jest.mock("../Cell/Cell", () => ({ value, row, col, onClick }: any) => (
  <button onClick={() => onClick(row, col)} data-testid={`cell-${row}-${col}`}>
    {value}
  </button>
));

describe("Board Component", () => {
  beforeEach(() => {
    (sendRequest as jest.Mock).mockResolvedValue({
      newBoard: Array.from({ length: N }, () => Array(N).fill(" ")),
    });
  });

  it("renders the board and shows initial turn", () => {
    render(<Board />);
    expect(screen.getByText("Turn: X")).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(N * N);
  });

  it("allows a move and switches turn", async () => {
    render(<Board />);

    const cell = screen.getByTestId("cell-0-0");
    fireEvent.click(cell);

    await waitFor(() => {
      expect(sendRequest).toHaveBeenCalledWith({ row: 0, col: 0, value: "X" });
    });

    expect(screen.getByText("Turn: O")).toBeInTheDocument();
  });

  it("does not allow move on occupied cell", async () => {
    (sendRequest as jest.Mock).mockResolvedValueOnce({
      newBoard: [
        ["X", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
      ],
    });

    render(<Board />);
    const cell = screen.getByTestId("cell-0-0");
    fireEvent.click(cell);

    await waitFor(() => {
      expect(sendRequest).toHaveBeenCalled();
    });

    // Try to click the same cell again
    fireEvent.click(cell);

    // sendRequest should not be called again
    expect(sendRequest).toHaveBeenCalledTimes(1);
  });

  it.only("displays win alert (mocked)", async () => {
    const alert = jest.fn();
    jest.spyOn(window, "alert").mockImplementation(alert);

    (sendRequest as jest.Mock).mockResolvedValueOnce(
      new Promise((resolve) => {
        resolve({
          newBoard: [
            ["X", "X", "X"],
            [" ", " ", " "],
            [" ", " ", " "],
          ],
        });
      })
    );

    render(<Board />);
    const cell = screen.getByTestId("cell-1-1");
    await fireEvent.click(cell);

    await waitFor(() => {
      expect(alert).toBeCalled();
    });

    (window.alert as jest.Mock).mockRestore();
  });
});
