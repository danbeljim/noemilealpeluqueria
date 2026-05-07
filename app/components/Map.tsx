'use client';

import dynamic from "next/dynamic";

const MapContent = dynamic(() => import("./MapContent"), { ssr: false });

export default function Map() {
  return (
    <section
      id="ubicacion"
      className="py-32 px-6 relative"
      style={{
        backgroundImage: 'url(/gallery/zona.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-white/85"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl font-light text-center mb-20 text-gray-900">
          Ubicación
        </h2>
        <div className="max-w-4xl mx-auto">
          <MapContent />
        </div>
      </div>
    </section>
  );
}
