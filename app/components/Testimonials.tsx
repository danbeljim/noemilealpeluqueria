const testimonials = [
  {
    name: "María García",
    comment: "Excelente servicio, Noemi es una profesional. Mi cabello se ve increíble.",
    rating: 5
  },
  {
    name: "Carmen López",
    comment: "Muy recomendable, trato personalizado y resultados de calidad.",
    rating: 5
  },
  {
    name: "Ana Rodríguez",
    comment: "Encantada con mi nuevo look. Volveré pronto.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Lo que Dicen Nuestras Clientas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-pink-50 p-6 rounded-lg shadow-md">
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <span key={j} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
              <p className="font-semibold text-gray-900">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
