'use client';

import dynamic from "next/dynamic";

const MapContent = dynamic(() => import("./MapContent"), { ssr: false });

export default function Map() {
  return (
    <section id="ubicacion" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Ubicación
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Noemi Leal</h3>
            <div className="space-y-3 text-gray-700">
              <p><strong>📍 Dirección:</strong></p>
              <p>C. Bernabé Soriano, 30</p>
              <p>Entreplanta Centro</p>
              <p>23001 Jaén, España</p>
              <p className="mt-4"><strong>📞 Teléfono:</strong></p>
              <a href="tel:+34666222901" className="text-pink-600 hover:text-pink-700">+34 666 222 901</a>
            </div>
          </div>
          <MapContent />
        </div>
      </div>
    </section>
  );
}
