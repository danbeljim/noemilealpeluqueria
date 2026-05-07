'use client';

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
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Galería de Trabajos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition h-96 cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.title}
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
