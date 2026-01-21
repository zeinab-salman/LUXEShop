import { motion } from "framer-motion";
import "./TypeWriterText.css"
const TypeWriterText = ({ text ,type}) => {
  const letters = Array.from(text);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // التأخير بين كل حرف والآخر
        delayChildren: 0.04 * i
      },
    }),
  };

  // إعدادات الحركة لكل حرف (الابن)
  const childVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
    },
  };

  return (
    <motion.p
      variants={containerVariants}
      initial="hidden"
      animate="visible"
     className={`${type}`}
    >
      {letters.map((letter, index) => (
        <motion.span variants={childVariants} key={index} className={`${type}`} >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default TypeWriterText;