// Importar las funciones necesarias de vitest y React Testing Library
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../components/footer/Footer";

// Escribir la prueba
test("El componente Footer se renderiza correctamente", () => {

  // Renderizar el componente
  render(<Footer />);

  // Verificar que el componente se renderiza buscando un elemento específico dentro de él
  expect(screen.getByText("hola")).toBeInTheDocument();
});