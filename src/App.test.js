import { render, screen } from "@testing-library/react";
import App from "./App";

test("it can receive a new user and show it on a list", () => {
  render(<App />);
});
