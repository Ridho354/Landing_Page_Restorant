import React from 'react';
import chef from '../assets/chef.jpeg';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full flex gap-8 glass-effect" >
        {/* Form Section */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white mb-2">
            Hubungi Kami
          </h1>
          <p className="text-white mb-8">
            Silakan hubungi kami dengan mengisi formulir di bawah ini.
          </p>
          
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Nama Belakang"
                className="w-1/2 bg-[#1C1C2E] text-white rounded-lg p-3 border border-gray-700 focus:border-purple-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Nama Depan"
                className="w-1/2 bg-[#1C1C2E] text-white rounded-lg p-3 border border-gray-700 focus:border-purple-500 focus:outline-none"
              />
            </div>
            
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#1C1C2E] text-white rounded-lg p-3 border border-gray-700 focus:border-purple-500 focus:outline-none"
            />
            
            <input
              type="tel"
              placeholder="Nomor Telepon"
              className="w-full bg-[#1C1C2E] text-white rounded-lg p-3 border border-gray-700 focus:border-purple-500 focus:outline-none"
            />
            
            <textarea
              placeholder="Pesan"
              rows={5}
              className="w-full bg-[#1C1C2E] text-white rounded-lg p-3 border border-gray-700 focus:border-purple-500 focus:outline-none resize-none"
            />
            
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg p-3 transition-colors flex items-center justify-center gap-2"
            >
              Kirim
              <span className="text-xl">🚀</span>
            </button>
          </form>
        </div>
        
        {/* Image Section */}
        <div className="flex-1 bg-[#1C1C2E] rounded-2xl p-8 flex flex-col">
          <img
            src={chef}
            alt="chef"
            className="flex-1 object-contain mb-4"
          />
          <blockquote className="text-gray-300 italic">
            "Makanan terenak adalah yang dimasak dengan cinta."
          </blockquote>
          <p className="text-gray-400 mt-2">- Dari Chef</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;