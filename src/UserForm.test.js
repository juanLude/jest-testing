import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("It shows two inputs and a button", () => {
  // render the component
  render(<UserForm />);
  // manipulate the component or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");
  // assertion - make sure the component is doing what is expected
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("It calls onUserAdd when the form is submitted", () => {
  const mock = jest.fn();
  // render the component
  render(<UserForm onUserAdd={mock} />);
  // find the two inputs
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  console.log(screen.getAllByRole("textbox"));
  // simulate typing in a name
  user.click(nameInput);
  user.keyboard("jane");
  // simulate typing in an email
  user.click(emailInput);
  user.keyboard("jane@gmail.com");
});
