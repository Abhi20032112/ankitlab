import React from 'react';
import { motion } from 'framer-motion';

const FloatingMolecules = ({ count = 25 }) => {
  const molecules = Array.from({ length: count });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {molecules.map((_, index) => {
        const size = Math.random() * 8 + 4;
        const duration = 8 + Math.random() * 10;
        const delay = Math.random() * 5;

        return (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${size}px`,
              height: `${size}px`,
              background: `radial-gradient(circle, hsla(${200 + Math.random() * 40}, 80%, 70%, ${Math.random() * 0.3 + 0.1}), transparent 70%)`,
            }}
            animate={{
              y: [0, Math.random() * 60 - 30, 0],
              x: [0, Math.random() * 60 - 30, 0],
              scale: [1, 1.8, 1],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingMolecules;