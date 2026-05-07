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
    <section id="testimonios" className="py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-light text-center mb-20 text-gray-900">
          Opiniones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white p-8 rounded-sm border border-gray-200">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <span key={j} className="text-gray-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 font-light leading-relaxed text-sm">"{testimonial.comment}"</p>
              <p className="font-light text-gray-900 text-sm">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
