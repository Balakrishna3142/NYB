
import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi, afterEach } from "vitest";
import UserList from "./UserList";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Mocking API Requests", () => {
  test("shows loading message", () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() => new Promise(() => {}))
    );

    render(<UserList />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("displays users when API succeeds", async () => {
    const fakeUsers = [
      { id: 1, name: "Rahul" },
      { id: 2, name: "Priya" },
    ];

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(fakeUsers),
      })
    );

    render(<UserList />);

    expect(await screen.findByText("Rahul")).toBeInTheDocument();
    expect(screen.getByText("Priya")).toBeInTheDocument();
  });

  test("shows error when API fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValue(new Error("Network error"))
    );

    render(<UserList />);

    expect(
      await screen.findByText("Error loading users")
    ).toBeInTheDocument();
  });
});
