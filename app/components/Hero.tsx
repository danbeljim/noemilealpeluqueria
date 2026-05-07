export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-pink-50 to-pink-100 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Belleza y Elegancia en Jaén
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Peluquería especializada en cortes modernos, colorimetría y cuidado capilar
        </p>
        <button className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition">
          Reservar Cita
        </button>
      </div>
    </section>
  );
}
