const services = [
  {
    title: "Cortes",
    description: "Diseños personalizados según tu tipo de cabello y rostro"
  },
  {
    title: "Color",
    description: "Tintura profesional con productos de calidad premium"
  },
  {
    title: "Tratamientos",
    description: "Hidratación, reparación y alisado de cabello"
  },
  {
    title: "Peinados",
    description: "Estilos para ocasiones especiales y eventos"
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-light text-center mb-20 text-gray-900">
          Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-sm border border-gray-200 hover:border-gray-900 transition">
              <h3 className="text-lg font-light text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
