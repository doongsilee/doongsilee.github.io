'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="-z-10 fixed inset-0 overflow-hidden pointer-events-none">
      {/* Diagonal line 1 - cyan */}
      <motion.div
        className="top-0 left-0 absolute bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-20 w-1 h-full"
        animate={{
          x: [0, window.innerWidth || 1200],
          rotate: [20, 20],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Diagonal line 2 - blue */}
      <motion.div
        className="top-0 right-0 absolute bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-20 w-1 h-full"
        animate={{
          x: [0, -(window.innerWidth || 1200)],
          rotate: [-20, -20],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
      />

      {/* Horizontal flowing line 1 */}
      <motion.div
        className="top-1/4 left-0 absolute bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-15 w-full h-0.5"
        animate={{
          y: [0, window.innerHeight || 800, -100],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Horizontal flowing line 2 */}
      <motion.div
        className="top-3/4 left-0 absolute bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-15 w-full h-0.5"
        animate={{
          y: [0, -(window.innerHeight || 800), 100],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Vertical line pulsing 1 */}
      <motion.div
        className="top-0 left-1/4 absolute bg-gradient-to-b from-transparent via-green-500 to-transparent opacity-15 w-0.5 h-full"
        animate={{
          scaleY: [0, 1, 0],
          opacity: [0, 0.2, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Vertical line pulsing 2 */}
      <motion.div
        className="top-0 right-1/3 absolute bg-gradient-to-b from-transparent via-pink-500 to-transparent opacity-15 w-0.5 h-full"
        animate={{
          scaleY: [0, 1, 0],
          opacity: [0, 0.2, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Cross lines effect */}
      <motion.div
        className="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="relative w-96 h-96">
          <div className="top-1/2 left-0 absolute bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20 w-full h-px" />
          <div className="top-0 left-1/2 absolute bg-gradient-to-b from-transparent via-indigo-500 to-transparent opacity-20 w-px h-full" />
        </div>
      </motion.div>

      {/* Wavy line */}
      <motion.svg
        className="top-1/3 left-0 absolute opacity-10 w-full h-32"
        animate={{
          x: [0, -100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.path
          d="M0,50 Q250,0 500,50 T1000,50 T1500,50 T2000,50"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          animate={{
            d: [
              "M0,50 Q250,0 500,50 T1000,50 T1500,50 T2000,50",
              "M0,50 Q250,100 500,50 T1000,50 T1500,50 T2000,50",
              "M0,50 Q250,0 500,50 T1000,50 T1500,50 T2000,50",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgb(59, 130, 246)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}
