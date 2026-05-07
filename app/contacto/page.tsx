import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactoPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 max-w-4xl mx-auto w-full px-6 py-16">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Contacto</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-pink-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Información</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900">📍 Ubicación</p>
                <p className="text-gray-700">Jaén, España</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">📞 Teléfono</p>
                <p className="text-gray-700">+34 XXX XXX XXX</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">📧 Email</p>
                <p className="text-gray-700">info@noemileal.es</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">⏰ Horario</p>
                <p className="text-gray-700">Mar - Viernes: 9:00 - 19:00</p>
                <p className="text-gray-700">Sábado: 9:00 - 14:00</p>
                <p className="text-gray-700">Domingo: Cerrado</p>
              </div>
            </div>
          </div>

          <form className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Enviar Mensaje</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Nombre</label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="tu@email.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Mensaje</label>
                <textarea className="w-full border border-gray-300 rounded px-3 py-2 h-32" placeholder="Tu mensaje..."></textarea>
              </div>
              <button className="w-full bg-pink-600 text-white py-2 rounded font-semibold hover:bg-pink-700 transition">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
