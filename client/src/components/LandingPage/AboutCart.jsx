import React from 'react';
import { Flower } from 'lucide-react'; // Using Flower as a representative Kolam icon

const AboutCard = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl shadow-gray-200 border border-gray-100 relative">
          
          {/* Decorative Icon */}
          <div className="absolute top-8 right-8 text-gray-200">
            <Flower className="w-12 h-12 sm:w-16 sm:h-16 transform rotate-45" strokeWidth={1} />
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6 relative z-10">
            What is Chitrakolam?
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Chitrakolam is a modern platform that bridges the timeless tradition of kolam art with contemporary
              technology. We celebrate the rich cultural heritage of South Indian floor art while making it accessible to
              everyone, everywhere.
            </p>

            <p>
              Whether you're a beginner curious about this ancient art form or an experienced artist looking to explore new
              patterns, discover the mathematical beauty behind each design, and <strong className="text-red-700">create your own masterpieces</strong>.
            </p>

            <p>
              Our platform combines traditional wisdom with modern design tools, making kolam art more engaging,
              educational, and inspiring than ever before. Join a vibrant community of artists, learners, and cultural
              enthusiasts who are keeping this beautiful tradition alive.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutCard;