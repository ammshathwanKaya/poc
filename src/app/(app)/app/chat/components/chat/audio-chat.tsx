"use client";
import { motion } from "framer-motion";
import { ChatMessage } from "../chat-container";
import { useEffect, useRef } from "react";

type IAudioChat = {
  speaking: boolean;
  setConversation: (chat: ChatMessage[]) => void;
  isPlayAudio?: boolean;
};

export const AudioChat = ({ speaking, isPlayAudio }: IAudioChat) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlayAudio) {
      audio.play().catch(console.error);
    } else {
      audio.pause();
    }
  }, [isPlayAudio]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = false;
    if (isPlayAudio) {
      audio.play().catch(console.error);
    }

    return () => {
      audio.pause();
    };
  }, []);

  return (
    <motion.div
      className="w-full min-w-[100%]  flex items-center justify-center "
      initial={{ translateX: "100%" }}
      animate={{ translateX: !speaking ? "100%" : "-100%" }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <div className="bg-chat-gradient size-[200px] rounded-full relative animate-spin [animation-duration:5s]">
        <div className="bg-inner-gradient size-full absolute top-0 leading-0 rounded-full opacity-60"></div>
      </div>
      <audio
        ref={audioRef}
        src="/audio-transcript.mp3"
        preload="auto"
        style={{ display: "none" }}
      />
    </motion.div>
  );
};
