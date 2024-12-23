import React from 'react';
import logo from '../assets/logo.png';
import bg from '../assets/bg.jpeg';

const HeroSection = () => {
  return (
    <div className="relative mb-8 px-10" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-white text-3xl font-bold mb-2">Rumah Makan Enigmanians</h2>
          <p className="text-white mb-4 font-semibold">Jl. Topaz, No. 7, Kota Malang</p>
          <p className="text-xl mb-4 text-white">Buka 24 Jam</p>
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