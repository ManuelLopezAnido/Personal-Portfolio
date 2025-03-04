import { motion } from "framer-motion";


const Slide = ({ children, duration = 0.8, direction = "left", distance = 100 }) => {
  // Definir desplazamiento según la dirección
  const variants = {
    left: { x: -distance, opacity: 0 },
    right: { x: distance, opacity: 0 },
    up: { y: -distance, opacity: 0 },
    down: { y: distance, opacity: 0 }
  };

  return (
    <motion.section
      initial={variants[direction]} // Aplica el movimiento inicial
      animate={{ x: 0, y: 0, opacity: 1 }} // Termina en su posición normal
      transition={{ duration }}
    >
      {children}
    </motion.section>)
  
};

const Fade = ({ children, duration = 0.8 }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration }}
    >
      {children}
    </motion.section>
  );
  
};


const FadeTop = ({ children, duration = 0.8 }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration }}
    >
      {children}
    </motion.section>
  );
};


const FadeBig = ({ children, duration = 0.8, scale = 1.5 }) => {
  return (
    <motion.section
      initial={{ opacity: 0, scale }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration }}
    >
      {children}
    </motion.section>
  );
};

export  {Fade, FadeBig, FadeTop, Slide};


