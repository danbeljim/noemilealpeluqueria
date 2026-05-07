import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-pink-600 hover:text-pink-700">
          Noemi Leal
        </Link>
        <ul className="flex gap-8">
          <li><Link href="/servicios" className="hover:text-pink-600 transition">Servicios</Link></li>
          <li><Link href="/galeria" className="hover:text-pink-600 transition">Galería</Link></li>
          <li><Link href="/testimonios" className="hover:text-pink-600 transition">Testimonios</Link></li>
          <li><Link href="/contacto" className="hover:text-pink-600 transition">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}
