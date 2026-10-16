
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect } from "vitest";
import RegistrationForm from "./RegistrationForm";

describe("Registration Form Integration Tests", () => {
  test("shows welcome message after submitting a name", async () => {
    const user = userEvent.setup();

    render(<RegistrationForm />);

    await user.type(screen.getByLabelText("Name:"), "Rahul");
    await user.click(screen.getByRole("button", { name: "Submit" }));

    expect(screen.getByRole("status"))
      .toHaveTextContent("Welcome, Rahul!");
  });

  test("shows validation error when name is empty", async () => {
    const user = userEvent.setup();

    render(<RegistrationForm />);

    await user.click(screen.getByRole("button", { name: "Submit" }));

    expect(screen.getByRole("status"))
      .toHaveTextContent("Please enter your name");
  });

  test("updates welcome message when a different name is submitted", async () => {
    const user = userEvent.setup();

    render(<RegistrationForm />);

    const nameInput = screen.getByLabelText("Name:");

    await user.type(nameInput, "Priya");
    await user.click(screen.getByRole("button", { name: "Submit" }));

    expect(screen.getByRole("status"))
      .toHaveTextContent("Welcome, Priya!");
  });
});
