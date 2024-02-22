import { test, expect } from "vitest";
import NavbarCustom from '../components/navbar/NavbarCustom';
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

test("El componente NavbarCustom se renderiza correctamente", () => {
  // Renderiza el componente dentro de un BrowserRouter
  render(
    <BrowserRouter>
      <NavbarCustom />
    </BrowserRouter>
  );

  // Verifica la existencia del logo de la empresa
  expect(screen.getByAltText("company logo")).toBeInTheDocument();

  // Verifica la existencia de elementos de navegación
  expect(screen.getByText("Junior")).toBeInTheDocument();
  expect(screen.getByText("Tus Junior")).toBeInTheDocument();
  expect(screen.getByText("Contáctame")).toBeInTheDocument();


  // Verifica la existencia del logo de usuario
  expect(screen.getByAltText("user logo")).toBeInTheDocument();
});
