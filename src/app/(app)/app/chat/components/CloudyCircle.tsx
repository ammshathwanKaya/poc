"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CloudyCircleProps {
  size?: number; // diameter in px
  cloudSrc?: string; // cloud texture image url
}

export default function CloudyCircle({
  size = 200,
  cloudSrc = "",
}: CloudyCircleProps) {
  return (
    <div
      className="relative rounded-full overflow-hidden shadow-xl bg-slate-800"
      style={{ width: size, height: size }}
    >
      {/* Clouds moving layer */}
      <motion.div
        className="absolute inset-0"
        initial={{ x: 0 }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        style={{ width: "400%" }}
      >
        <Image
          src={cloudSrc}
          alt="clouds"
          fill
          className="object-cover opacity-70"
        />
      </motion.div>

      {/* Optional pulsing glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={{ boxShadow: "0 0 0px rgba(255,255,255,0.5)" }}
        animate={{
          boxShadow: [
            "0 0 20px rgba(255,255,255,0.3)",
            "0 0 40px rgba(255,255,255,0.6)",
            "0 0 20px rgba(255,255,255,0.3)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </div>
  );
}
