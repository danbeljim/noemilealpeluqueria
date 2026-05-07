import Image from "next/image";

const galleryImages = [
  { id: 1, src: "/gallery/imagen1.jpg", title: "Corte Moderno" },
  { id: 2, src: "/gallery/imgen2.jpg", title: "Color Radiante" },
  { id: 3, src: "/gallery/imagen3.jpg", title: "Diseño Elegante" },
  { id: 4, src: "/gallery/imagen4.jpg", title: "Transformación Completa" },
  { id: 5, src: "/gallery/imagen5.jpg", title: "Volumen y Brillo" },
  { id: 6, src: "/gallery/imagen6.jpg", title: "Peinado Especial" }
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 px-6 bg-gradient-to-b from-white via-pink-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Galería de Trabajos
          </h2>
          <p className="text-gray-600 text-lg">Descubre nuestras transformaciones y estilos</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-pink-100"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-contain p-3 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
