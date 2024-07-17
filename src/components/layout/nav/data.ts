interface Route {
  id: number;
  label: string;
  href: string;
}
export type NavRoutes = Array<Route>;
// src/components/layout/navRoutes.ts
export const navRoutes: NavRoutes = [
  { id: 1, label: "Servicios", href: "#Servicios" },
  { id: 2, label: "Pasos", href: "#Pasos" },
  { id: 3, label: "Nuestro Equipo", href: "#Nuestro-Equipo" },
  { id: 4, label: "Trabajos", href: "#Trabajos" },
  { id: 5, label: "Comentarios", href: "#Comentarios" },
  { id: 6, label: "Contacto", href: "#Contacto" },
  { id: 7, label: "Blog", href: "/blog" },
];
