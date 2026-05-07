import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <Image
          src="/gallery/logo.jpg"
          alt="Noemi Leal Logo"
          width={100}
          height={50}
          className="h-12 w-auto"
        />
        <ul className="flex gap-10 text-sm font-light">
          <li><a href="#servicios" className="hover:text-gray-600 transition">Servicios</a></li>
          <li><a href="#galeria" className="hover:text-gray-600 transition">Galería</a></li>
          <li><a href="#testimonios" className="hover:text-gray-600 transition">Opiniones</a></li>
          <li><a href="#ubicacion" className="hover:text-gray-600 transition">Ubicación</a></li>
        </ul>
      </nav>
    </header>
  );
}
