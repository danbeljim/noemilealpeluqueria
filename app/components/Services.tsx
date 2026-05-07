const services = [
  {
    title: "Cortes Modernos",
    description: "Diseños personalizados según tu tipo de cabello y rostro",
    icon: "✂️"
  },
  {
    title: "Colorimetría",
    description: "Tintura profesional con productos de calidad premium",
    icon: "🎨"
  },
  {
    title: "Tratamientos Capilares",
    description: "Hidratación, reparación y alisado de cabello",
    icon: "💆"
  },
  {
    title: "Peinados",
    description: "Estilos para ocasiones especiales y eventos",
    icon: "💃"
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div key={i} className="bg-pink-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
