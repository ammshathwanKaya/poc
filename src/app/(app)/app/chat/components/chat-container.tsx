"use client";
import { AudioWaveAnimation } from "@/components/audio-wave-animation";

import { Send, X } from "lucide-react";
import { ChatBubble } from "./chat/chat-bubble";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Spline from "@splinetool/react-spline";

export enum UserType {
  USER = "USER",
  BOT = "BOT",
}

export type ChatMessage = {
  userType: UserType;
  userName: string;
  message: string;
  timestamp: string;
  video?: string;
};

export const conversation: ChatMessage[] = [
  {
    userType: UserType.USER,
    userName: "JohnDoe",
    message:
      "Hello! I’m really interested in learning more about basketball with Unrivaled. Is it possible to schedule a call to discuss?",
    timestamp: "2025-09-19T13:55:00Z",
  },
  {
    userType: UserType.BOT,
    userName: "UnrivaledAssistant",
    message:
      "Hi JohnDoe! Absolutely, we’d love to connect with you. Could you let me know your preferred date and time for the call?",
    timestamp: "2025-09-19T13:56:10Z",
    video:
      "https://www.dropbox.com/scl/fo/mwbiyh14n5zfj6owwpyhk/ALND6G6nnih7-yY_Bva5ubg/PLAYERS/CHELSEA%20GRAY%20-%20PASSING?dl=0&preview=2+Ball+Speed+Stop%2C+Step+Through%2C+Spin+Outs+-+Chelsea+Gray.mp4&rlkey=ksb2yb5smfj7xjb615gtmb9zf&subfolder_nav_tracking=1",
  },
  {
    userType: UserType.USER,
    userName: "JohnDoe",
    message:
      "I’m available this Thursday afternoon, anytime after 2 PM. Would that work?",
    timestamp: "2025-09-19T13:57:05Z",
  },
  {
    userType: UserType.BOT,
    userName: "UnrivaledAssistant",
    message:
      "Great! Thursday after 2 PM works perfectly. I’ve scheduled a call for you at 2:30 PM. You’ll receive a confirmation email shortly with the details.",
    timestamp: "2025-09-19T13:58:00Z",
  },
  {
    userType: UserType.USER,
    userName: "JohnDoe",
    message:
      "Thank you! I’m really excited to learn more about your basketball programs.",
    timestamp: "2025-09-19T13:59:20Z",
  },
  {
    userType: UserType.BOT,
    userName: "UnrivaledAssistant",
    message:
      "You’re welcome, JohnDoe! We’re excited to share everything about Unrivaled’s basketball programs. See you on Thursday!",
    timestamp: "2025-09-19T14:00:10Z",
  },
  {
    userType: UserType.BOT,
    userName: "UnrivaledAssistant",
    message:
      "Great! Thursday after 2 PM works perfectly. I’ve scheduled a call for you at 2:30 PM. You’ll receive a confirmation email shortly with the details.",
    timestamp: "2025-09-19T13:58:00Z",
  },
  {
    userType: UserType.USER,
    userName: "JohnDoe",
    message:
      "Thank you! I’m really excited to learn more about your basketball programs.",
    timestamp: "2025-09-19T13:59:20Z",
  },
  {
    userType: UserType.BOT,
    userName: "UnrivaledAssistant",
    message:
      "You’re welcome, JohnDoe! We’re excited to share everything about Unrivaled’s basketball programs. See you on Thursday!",
    timestamp: "2025-09-19T14:00:10Z",
  },
];

export const ChatContainer = () => {
  const [speaking, seSpeaking] = useState(false);
  const [viewAvatar, setViewAvatar] = useState(false);

  return (
    <div className="h-dvh flex flex-col w-full overflow-hidden">
      <motion.div
        initial={{ height: 64 }}
        animate={{ height: viewAvatar ? 900 : 64 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="h-16 min-h-16 bg-white/2 flex-col border-b border-white/10"
      >
        <div className="w-full flex h-16 justify-between items-center px-4 ">
          <img src="/unrivaled.svg" alt="unrivaled" className="h-8" />
          <motion.button
            className={cn(
              "size-10 min-w-10 rounded-full bg-white/10 overflow-hidden flex items-center justify-center relative",
              {
                "ring-2 ring-white/30 size-8 min-w-8": viewAvatar,
              }
            )}
            onClick={() => setViewAvatar(!viewAvatar)}
          >
            <motion.img
              src="/avatar.gif"
              alt="unrivaled"
              className="size-full object-cover rounded-full"
              initial={{ scale: 1, position: "relative" }}
              animate={{
                scale: !viewAvatar ? 1 : 0,
                position: !viewAvatar ? "relative" : "absolute",
              }}
              transition={{ duration: 0.2 }}
            />

            <motion.span
              initial={{ scale: 0, position: "absolute" }}
              animate={{
                scale: !viewAvatar ? 0 : 1,
                position: !viewAvatar ? "absolute" : "relative",
              }}
              transition={{ duration: 0.2 }}
            >
              <X size={16} />
            </motion.span>
          </motion.button>
        </div>
        <div className="overflow-hidden rounded-none flex-grow">
          <img
            src="/avatar.gif"
            alt="unrivaled"
            className="size-full object-cover"
          />
        </div>
      </motion.div>

      <motion.div className="flex-grow overflow-auto flex overflow-x-hidden bg-dark">
        <motion.div
          className="w-full min-w-[100%] flex flex-col gap-y-6 p-4"
          initial={{ translateX: "0" }}
          animate={{ translateX: !speaking ? "0" : "-100vw" }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          {conversation.map((conversation, i) => (
            <ChatBubble conversation={conversation} key={i} />
          ))}
        </motion.div>

        <motion.div
          className="w-full min-w-[100%]  flex items-center justify-center"
          initial={{ translateX: "100%" }}
          animate={{ translateX: !speaking ? "100%" : "-100%" }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <Spline
            scene="https://prod.spline.design/usPzYif8XiitaOoL/scene.splinecode"
            className="!size-[150%]"
          />
        </motion.div>
      </motion.div>

      <div className="min-h-18 mt-3 h-16 w-full p-3 flex items-start border-t-[1px] border-white/10">
        <div className="w-full border-[1px] bg-white/2 h-full border-white/5 p-2 rounded-lg flex items-center gap-x-2">
          <input type="text" placeholder="Send Message" className="flex-grow" />
          <AudioWaveAnimation speaking={speaking} seSpeaking={seSpeaking} />
          <button className="size-10 min-w-10 bg-gradient-to-r from-primary-blue to-primary-purple rounded-md ml-2 flex items-center justify-center">
            <Send className="text-white stroke-2" size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
