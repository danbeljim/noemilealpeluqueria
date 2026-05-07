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
    <section id="galeria" className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Galería de Trabajos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition bg-white"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-contain p-2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
