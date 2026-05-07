'use client';

const galleryImages = [
  { id: 1, title: "Corte Moderno" },
  { id: 2, title: "Color Radiante" },
  { id: 3, title: "Diseño Elegante" },
  { id: 4, title: "Transformación Completa" },
  { id: 5, title: "Volumen y Brillo" },
  { id: 6, title: "Peinado Especial" }
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Galería de Trabajos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="bg-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition h-64 flex items-center justify-center cursor-pointer group"
            >
              <div className="text-center group-hover:opacity-100 opacity-70">
                <p className="text-white text-lg font-semibold">{image.title}</p>
                <p className="text-white text-sm mt-2">[Foto de cliente]</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-8 text-sm">
          * Aquí irán las fotos de tus trabajos realizados
        </p>
      </div>
    </section>
  );
}
