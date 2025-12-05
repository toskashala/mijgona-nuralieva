import { motion } from "framer-motion";

export default function SectionHeader({ title, className = "" }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <motion.div
        className="w-24 h-[2px] bg-brown-600 md:mb-2"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.h2
        className="text-lg md:text-xl font-light text-brown-900 mb-8 md:mb-16 uppercase"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.3, // Slight delay after the line animation
          ease: "easeOut",
        }}
      >
        {title}
      </motion.h2>
    </div>
  );
}
