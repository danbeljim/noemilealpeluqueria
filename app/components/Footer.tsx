export default function Footer() {
  return (
    <footer id="contacto" className="bg-white text-gray-900 py-16 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-light text-lg mb-2">Noemi Leal</h3>
            <p className="text-gray-600 font-light text-sm">Peluquería en Jaén</p>
          </div>
          <div>
            <h3 className="font-light text-sm text-gray-500 mb-3">Contacto</h3>
            <p className="text-gray-900 font-light text-sm mb-1">+34 666 222 901</p>
            <p className="text-gray-900 font-light text-sm">info@noemileal.es</p>
          </div>
          <div>
            <h3 className="font-light text-sm text-gray-500 mb-3">Horario</h3>
            <p className="text-gray-900 font-light text-sm">Mar - Viernes: 9:00 - 19:00</p>
            <p className="text-gray-900 font-light text-sm">Sábado: 9:00 - 14:00</p>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-xs font-light">
          <p>&copy; 2026 Noemi Leal. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
