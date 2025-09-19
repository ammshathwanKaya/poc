"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Mic } from "lucide-react";

const bars = [0, 1, 2, 3, 4];

type AudioWaveAnimationProps = {
  active?: boolean;
  color?: string;
  seSpeaking: (speaking: boolean) => void;
  speaking: boolean;
};

export const AudioWaveAnimation = ({
  color = "#3b82f6",
  seSpeaking,
  speaking,
}: AudioWaveAnimationProps) => {
  return (
    <div
      className="flex items-center justify-center"
      onClick={() => seSpeaking(!speaking)}
    >
      <AnimatePresence mode="wait">
        {speaking ? (
          <motion.div
            key="wave"
            className="flex items-end gap-1 h-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {bars.map((bar) => (
              <motion.div
                key={bar}
                className="w-[2px] bg-blue-500 rounded"
                animate={{
                  scaleY: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: bar * 0.15,
                }}
                style={{
                  height: "100%",
                  transformOrigin: "bottom center ",
                  backgroundColor: color,
                }}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="mic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Mic
              className={cn(
                "w-6 h-6 text-blue-500 stroke-1",
                !speaking && "text-[#99a1af]"
              )}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
