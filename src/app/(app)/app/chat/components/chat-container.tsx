"use client";
import { AudioWaveAnimation } from "@/components/audio-wave-animation";

import { Send, X } from "lucide-react";
import { ChatBubble } from "./chat/chat-bubble";
import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ReactPlayer from "react-player";

interface ChatFlow {
  message: string;
  response: ReactNode;
}

const tempChatFlow: ChatFlow[] = [
  {
    message:
      "I’ve only got 15 minutes—can you give me a quick ball-handling workout?",
    response: (
      <>
        <p>
          {" "}
          Absolutely. Let’s build a 15-minute control-focused ball-handling
          routine.
        </p>

        <ol className="list-decimal list-inside space-y-2 my-3">
          <li>
            Start with pound dribbles – hard, low, controlled dribbles on each
            hand. This builds rhythm and strength.
          </li>
          <li>
            Move into figure-eight dribbles – weave the ball between your legs
            while keeping your head up.
          </li>
          <li>
            Then practice crossover into between-the-legs combos – focus on
            smooth transitions.
          </li>
          <li>
            Add behind-the-back wraps – keep the ball tight and shoulders
            relaxed.
          </li>
          <li>
            Finish with stationary one-hand dribbles – steady control as a
            cooldown.
          </li>
        </ol>

        <p>
          This routine should take you right around 15 minutes. Are you
          comfortable following these steps?
        </p>
      </>
    ),
  },
  {
    message: "Yes, I’m good with that.",
    response: (
      <>
        <p>
          Great. For reference, here’s a short demo clip that shows similar
          ball-handling control work:
        </p>

        <div className="flex items-center gap-x-2 my-3">
          <a
            href="https://www.dropbox.com/scl/fo/mwbiyh14n5zfj6owwpyhk/ALND6G6nnih7-yY_Bva5ubg/PLAYERS/CHELSEA%20GRAY%20-%20PASSING?e=1&preview=3+Dribble+Exchange+-+Chelsea+Gray+.mp4&rlkey=ksb2yb5smfj7xjb615gtmb9zf&subfolder_nav_tracking=1&dl=0"
            target="_blank"
            className="text-blue-400 underline"
          >
            Chelsea Gray – 3 Dribble Exchange (Video)
          </a>
        </div>

        <p>
          Would you like me to save this as your Quick Control Routine so you
          can call it up anytime?
        </p>
      </>
    ),
  },
];

interface VideoPlayerProps {
  url: string;
  playerName?: string;
}

export enum UserType {
  USER = "USER",
  BOT = "BOT",
}

export type ChatMessage = {
  userType: UserType;
  userName: string;
  message: ReactNode;
  timestamp: string;
  video?: string;
};

const fallbackAnswer =
  "I’m not sure about that. Could you rephrase your question?";

export const ChatContainer = () => {
  const [speaking, seSpeaking] = useState(false);
  const [viewAvatar, setViewAvatar] = useState(false);
  const [conversation, setConversation] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (conversation.length <= 0) {
        const botMessage: ChatMessage = {
          userType: UserType.BOT,
          userName: "UnrivaledAssistant",
          message: "What would you like to work on today?",
          timestamp: new Date().toISOString(),
        };
        setConversation([botMessage]);
      }
    }, 1000);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;

    const timestamp = new Date().toISOString();

    const userMessage: ChatMessage = {
      userType: UserType.USER,
      userName: "JohnDoe",
      message: input,
      timestamp,
    };

    setLoading(true);

    setConversation((prev) => [...prev, userMessage]);

    // check for a matching Q
    const pair = tempChatFlow.find((qa) =>
      input.toLowerCase().includes(qa.message.toLowerCase())
    );

    const botMessage: ChatMessage = {
      userType: UserType.BOT,
      userName: "UnrivaledAssistant",
      message: pair ? pair.response : fallbackAnswer,
      timestamp: new Date().toISOString(),
    };

    setTimeout(() => {
      setConversation((prev) => [...prev, botMessage]);
      setInput("");
      setLoading(false);
    }, 2000);
    // update state
  };

  const addMessageOnVIdeoEnd = () => {
    setLoading(true);
    const botMessage: ChatMessage = {
      userType: UserType.BOT,
      userName: "UnrivaledAssistant",
      message: (
        <>
          <p className="mb-2">
            Great. For reference, here’s a short demo clip that shows similar
            ball-handling control work:
          </p>
          <a
            href="https://www.dropbox.com/scl/fo/mwbiyh14n5zfj6owwpyhk/ALND6G6nnih7-yY_Bva5ubg/PLAYERS/CHELSEA%20GRAY%20-%20PASSING?e=1&preview=3+Dribble+Exchange+-+Chelsea+Gray+.mp4&rlkey=ksb2yb5smfj7xjb615gtmb9zf&subfolder_nav_tracking=1&dl=0"
            target="_blank"
            className="text-blue-400 underline"
          >
            Chelsea Gray – 3 Dribble Exchange (Video)
          </a>
          <p className="mt-2">
            You can check out this short video that demonstrates related
            ball-handling control moves.
          </p>
        </>
      ),
      timestamp: new Date().toISOString(),
    };

    setTimeout(() => {
      setConversation((prev) => [...prev, botMessage]);
      setLoading(false);
    }, 2000);
  };

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
              src="/avatar.png"
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
        {viewAvatar && (
          <div className="overflow-hidden rounded-none flex-grow">
            <ReactPlayer
              src={"/avatar-video.mp4"}
              width="100%"
              height="100%"
              onEnded={addMessageOnVIdeoEnd}
              autoPlay={viewAvatar}
            />
          </div>
        )}
      </motion.div>

      <motion.div className="flex-grow overflow-auto min-h-[50vh] flex overflow-x-hidden bg-dark">
        <motion.div
          className="w-full min-w-[100%] flex flex-col gap-y-6 p-4"
          initial={{ translateX: "0" }}
          animate={{ translateX: !speaking ? "0" : "-100vw" }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          {conversation.map((conversation, i) => (
            <ChatBubble conversation={conversation} key={i} />
          ))}
          {loading && (
            <div className="flex gap-1 items-center">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-2 h-2 bg-gray-400 rounded-full"
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>

        <motion.div
          className="w-full min-w-[100%]  flex items-center justify-center "
          initial={{ translateX: "100%" }}
          animate={{ translateX: !speaking ? "100%" : "-100%" }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <div className="bg-chat-gradient size-[200px] rounded-full relative">
            <div className="bg-inner-gradient size-full absolute top-0 leading-0 rounded-full opacity-60"></div>
          </div>
        </motion.div>
      </motion.div>

      <div className="min-h-18 mt-3 h-16 w-full p-3 flex items-start border-t-[1px] border-white/10">
        <div className="w-full border-[1px] bg-white/2 h-full border-white/5 p-2 rounded-lg flex items-center gap-x-2">
          <input
            type="text"
            placeholder="Send Message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow"
          />
          <AudioWaveAnimation speaking={speaking} seSpeaking={seSpeaking} />
          <button
            className="size-10 min-w-10 bg-gradient-to-r from-primary-blue to-primary-purple rounded-md ml-2 flex items-center justify-center"
            onClick={handleSend}
          >
            <Send className="text-white stroke-2" size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
