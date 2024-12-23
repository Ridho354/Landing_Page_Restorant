import React from 'react';
import logo from '../assets/logo.png';

const HeroSection = () => {
  return (
    <div className="relative mb-8 bg-gradient-to-r from-green-200 to-blue-200 rounded-xl p-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold mb-2">Rumah Makan Enigmanians</h2>
          <p className="text-gray-600 mb-4">Jl. Topaz, No. 7, Kota Malang</p>
          <p className="text-xl mb-4">Buka 24 Jam</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
            Beli Sekarang
          </button>
        </div>
        <img
          src={logo}
          alt="Logo RM"
          className="w-96 object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;