export default function Footer() {
  return (
    <footer id="contacto" className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Noemi Leal</h3>
            <p className="text-gray-400">Peluquería de confianza en Jaén</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <p className="text-gray-400">📍 Jaén, España</p>
            <p className="text-gray-400">📞 +34 XXX XXX XXX</p>
            <p className="text-gray-400">📧 info@noemileal.es</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Horario</h3>
            <p className="text-gray-400">Mar - Viernes: 9:00 - 19:00</p>
            <p className="text-gray-400">Sábado: 9:00 - 14:00</p>
            <p className="text-gray-400">Domingo: Cerrado</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Noemi Leal. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
