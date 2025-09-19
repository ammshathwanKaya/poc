"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";
import React, { useState } from "react";
import { slideInOut } from "@/lib/utils";

type GettingStartedProps = {
  onGettingStart?: () => void;
};

const GettingStarted = ({ onGettingStart }: GettingStartedProps) => {
  const [loading, setLoading] = useState(false);
  const router = useTransitionRouter();

  const mimicLoading = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      onGettingStart?.();

      router.push("/app/chat", {
        onTransitionReady: slideInOut,
      });
    }, 2000);
  };
  return (
    <div className="relative w-full h-full overflow-hidden">
      <video
        className="w-full h-[80dvh] object-cover absolute top-0 left-0 -z-[3]"
        autoPlay
        muted
        loop
        src="https://pub-ad8cc693759b4b55a181a76af041efa0.r2.dev/home/hero/2025-new-clubs.mp4"
      />
      <div className="w-full h-dvh absolute bottom-0 left-0 pointer-events-none bg-gradient-to-t from-dark via-primary-blur to-primary-purple opacity-60 -z-[2]"></div>
      <div className="w-full h-[100dvh] absolute bottom-0 left-0 pointer-events-none bg-gradient-to-t from-dark  to-transparent z-[1]"></div>
      <div className="w-full h-[100dvh] absolute bottom-0 left-0 pointer-events-none bg-gradient-to-t from-dark  to-transparent z-[1]"></div>
      <div className="w-full h-[100dvh] absolute bottom-0 left-0 pointer-events-none bg-gradient-to-t from-dark  to-transparent z-[1]"></div>

      <div className="relative z-10 h-dvh w-full flex items-end justify-center p-4">
        <div className="flex flex-col gap-y-3 w-[calc(100%-48px)] justify-center items-center">
          <img
            src="/unrivaled_wordmark.png"
            alt="unrivaled"
            className="h-6 absolute top-6 left-8 "
          />
          <h1 className="text-4xl font-bold mb-7 leading-12">
            8 Clubs, One Vision. This is Basketball Reimagined.
          </h1>
          <button
            className="bg-white/10 text-white w-full min-h-[52px] flex items-center justify-center py-3 rounded-lg text-lg font-semibold overflow-hidden border-[1px]"
            onClick={mimicLoading}
          >
            <AnimatePresence mode="wait">
              {!loading ? (
                <motion.span
                  key="text"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>AI Unrivaled</span>
                </motion.span>
              ) : (
                <motion.span
                  key="spinner"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Loader2 className="w-5 h-5 text-light animate-spin" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <p className="text-xs mt-3 text-light/80">
            Unrivaled {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
