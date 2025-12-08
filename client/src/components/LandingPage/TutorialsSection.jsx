import React from "react";
import { motion } from "framer-motion";
import tutorialImg from "../../assets/tutorial-step.png";

export default function TutorialsSection() {
  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT - SWINGING IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >

          {/* Wall Pin */}
          <div className="absolute -top-3 w-4 h-4 bg-gray-800 rounded-full z-50"></div>

          {/* Hanging String */}
          <div className="absolute -top-1 w-[2px] h-10 bg-gray-700 z-40"></div>

          {/* Swinging Frame */}
          <motion.div
            animate={{ rotate: [-4, 4, -4] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ rotate: 7 }}
            style={{ transformOrigin: "top center" }}
            className="bg-white shadow-xl rounded-3xl p-4 md:p-6 relative w-full h-full"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={tutorialImg}
                alt="Tutorial Step"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Bookmark */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-6 right-6 bg-white shadow-md rounded-full p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 2a2 2 0 00-2 2v14l7-4 7 4V4a2 2 0 00-2-2H5z" />
              </svg>
            </motion.div>

            {/* Soft Glow on Hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-pink-100/50 to-transparent opacity-0 hover:opacity-100 transition duration-500 pointer-events-none"></div>
          </motion.div>
        </motion.div>

        {/* RIGHT - TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-pink-600 font-semibold mb-2">
            Learn Step by Step
          </p>

          <h2 className="text-4xl font-semibold text-gray-900 mb-6">
            Interactive Tutorials
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            Master the art of kolam through our beautifully crafted,
            step-by-step interactive tutorials. Each lesson is designed like
            flipping through a traditional notebook, making learning intuitive
            and enjoyable.
          </p>

          {/* Feature List */}
          <div className="space-y-6 mb-10">
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-start gap-4 cursor-pointer"
            >
              <div className="w-4 h-4 bg-pink-500 rounded-full mt-1 animate-pulse"></div>
              <p className="text-gray-700">
                <span className="font-semibold">Structured Learning Path</span>
                <br />
                Progress from simple dots to complex patterns at your own pace.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-start gap-4 cursor-pointer"
            >
              <div className="w-4 h-4 bg-teal-500 rounded-full mt-1 animate-pulse"></div>
              <p className="text-gray-700">
                <span className="font-semibold">Visual Demonstrations</span>
                <br />
                Watch detailed animations showing every stroke and technique.
              </p>
            </motion.div>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-700 w-full  h-15 text-white px-8 py-3 rounded-full shadow-md hover:bg-red-600 transition"
          >
            Get Started Free
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
