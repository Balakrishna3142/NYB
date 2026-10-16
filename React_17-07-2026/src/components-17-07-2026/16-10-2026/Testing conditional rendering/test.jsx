
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect } from "vitest";
import LoginStatus from "./LoginStatus";

describe("LoginStatus conditional rendering", () => {
  test("shows login prompt initially", () => {
    render(<LoginStatus />);

    expect(
      screen.getByText("Please log in")
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Welcome, User!")
    ).not.toBeInTheDocument();
  });

  test("shows welcome message after login", async () => {
    const user = userEvent.setup();

    render(<LoginStatus />);

    await user.click(
      screen.getByRole("button", { name: "Login" })
    );

    expect(
      screen.getByText("Welcome, User!")
    ).toBeInTheDocument();
  });

  test("shows login prompt after logout", async () => {
    const user = userEvent.setup();

    render(<LoginStatus />);

    await user.click(
      screen.getByRole("button", { name: "Login" })
    );

    await user.click(
      screen.getByRole("button", { name: "Logout" })
    );

    expect(
      screen.getByText("Please log in")
    ).toBeInTheDocument();
  });
});
