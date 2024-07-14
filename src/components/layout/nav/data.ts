
interface Route {
  id: number,
  label: string,
  href: string
}
export type NavRoutes = Array<Route>;
// src/components/layout/navRoutes.ts
export const navRoutes: NavRoutes = [
    { id: 1, label: 'Servicios', href: '#' },
    { id: 2, label: 'Pasos', href: '#' },
    { id: 3, label: 'Nuestro Equipo', href: '#' },
    { id: 4, label: 'Trabajos', href: '#' },
    { id: 5, label: 'Comentarios', href: '#' },
    { id: 6, label: 'Contacto', href: '#' },
    { id: 7, label: 'Blog', href: '#' },
];