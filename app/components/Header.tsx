export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-pink-600">
          Noemi Leal
        </div>
        <ul className="flex gap-8">
          <li><a href="#servicios" className="hover:text-pink-600 transition">Servicios</a></li>
          <li><a href="#galeria" className="hover:text-pink-600 transition">Galería</a></li>
          <li><a href="#testimonios" className="hover:text-pink-600 transition">Testimonios</a></li>
          <li><a href="#contacto" className="hover:text-pink-600 transition">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
