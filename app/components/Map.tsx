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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-light mb-8 text-gray-900">Noemi Leal</h3>
            <div className="space-y-4 text-gray-700 font-light text-sm">
              <div>
                <p className="text-gray-500 mb-1">Dirección</p>
                <p>C. Bernabé Soriano, 30</p>
                <p>Entreplanta Centro</p>
                <p>23001 Jaén, España</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Teléfono</p>
                <a href="tel:+34666222901" className="text-gray-900 hover:text-gray-600">+34 666 222 901</a>
              </div>
            </div>
          </div>
          <MapContent />
        </div>
      </div>
    </section>
  );
}
