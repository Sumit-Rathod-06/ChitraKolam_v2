import React from "react";
import { Flower } from "lucide-react";
import { motion } from "framer-motion";

// Use any light kolam / paper texture / soft image
import bg from "../../assets/img7.jpeg"; 

const AboutCard = () => {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-br from-white via-rose-50 to-orange-50">

      {/* Soft background image */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-10"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Decorative floating shapes */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 left-24 w-64 h-64 bg-rose-200/40 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-20 right-24 w-72 h-72 bg-orange-200/40 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 right-1/3 w-52 h-52 bg-red-100/40 rounded-full blur-2xl"
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative max-w-6xl mx-auto px-6"
      >
        <div className="relative bg-white/70 backdrop-blur-xl p-10 sm:p-14 rounded-[2rem] shadow-2xl border border-gray-100 hover:shadow-rose-200 transition">

          {/* Decoration icon */}
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -top-10 -right-10 bg-white rounded-full p-5 shadow-xl border"
          >
            <Flower className="w-14 h-14 text-rose-500" strokeWidth={1.2} />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl font-serif font-extrabold text-gray-900 mb-6"
          >
            What is{" "}
            <span className="text-rose-600">Chitrakolam?</span>
            <span className="block w-24 h-1 bg-rose-500 mt-4 rounded-full"></span>
          </motion.h2>

          {/* Text */}
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Chitrakolam is a modern platform that bridges the timeless
              tradition of kolam art with contemporary technology. We celebrate
              the rich cultural heritage of South Indian floor art while making
              it accessible to everyone, everywhere.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Whether you're a beginner curious about this ancient art form or an
              experienced artist looking to explore new patterns, discover the
              mathematical beauty behind each design, and{" "}
              <span className="text-rose-700 font-semibold">
                create your own masterpieces
              </span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Our platform combines traditional wisdom with modern design tools,
              making kolam art more engaging, educational, and inspiring than
              ever before.
            </motion.p>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-8 py-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-rose-300 transition"
          >
            Explore Kolams →
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutCard;
