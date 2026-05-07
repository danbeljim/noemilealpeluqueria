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
    <section id="galeria" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-gray-900 mb-4">
            Galería
          </h2>
          <p className="text-gray-600 font-light">Nuestros trabajos recientes</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
