// Importar las funciones necesarias de vitest y React Testing Library
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../components/footer/Footer.jsx";

// Escribir la prueba
test("El componente Footer se renderiza correctamente", () => {

  // Renderizar el componente
  render(<Footer />);

  // Verificar que el componente se renderiza buscando un elemento específico dentro de él
  expect(screen.getByText("Nuestro equipo")).toBeTruthy();
});


test('Verificar el texto de derechos de autor', () => {
  render(<Footer />);
  const copyrightText = screen.getByText(/@2024 Todos los derechos reservados/i);
  expect(copyrightText).toBeTruthy();
});

test('Verificar la existencia del logo', () => {
  render(<Footer />);
  const logo = screen.getByAltText('Logo');
  expect(logo).toBeTruthy();
});
