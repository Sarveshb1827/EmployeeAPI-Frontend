import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Employee Management System title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Employee Management System/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders name input field", () => {
  render(<App />);
  const nameInput = screen.getByPlaceholderText(/Employee Name/i);
  expect(nameInput).toBeInTheDocument();
});

test("renders department input field", () => {
  render(<App />);
  const deptInput = screen.getByPlaceholderText(/Department/i);
  expect(deptInput).toBeInTheDocument();
});

test("renders salary input field", () => {
  render(<App />);
  const salaryInput = screen.getByPlaceholderText(/Salary/i);
  expect(salaryInput).toBeInTheDocument();
});

test("renders Add Employee button", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /Add Employee/i });
  expect(buttonElement).toBeInTheDocument();
});