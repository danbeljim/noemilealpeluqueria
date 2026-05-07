'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Galería de Trabajos
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          spaceBetween={20}
          className="rounded-lg"
        >
          {galleryImages.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover"
                  priority={image.id === 1}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
