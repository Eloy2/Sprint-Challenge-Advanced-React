import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App";
import Card from "./components/Card";
import Button from "./components/Button";
import { act } from "react-dom/test-utils";

test("check that all elements are in the document", () => {
  const card = render(<Card />);
  const button = render(<Button />)

  expect(card.getByTestId('card')).toBeInTheDocument;
  expect(button.getByTestId('button')).toBeInTheDocument;
});

test("check dark mode", ()=> {
  const app = render(<App />);

  act(() => {
    fireEvent.click(app.getByTestId('button'))
  });

  expect(window.localStorage.getItem("darkMode")).toBeTruthy;
})
