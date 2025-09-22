import { motion } from "framer-motion";
import { ChatMessage } from "../chat-container";

type IAudioChat = {
  speaking: boolean;
  setConversation: (chat: ChatMessage[]) => void;
};

export const AudioChat = ({ speaking }: IAudioChat) => {
  return (
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
  );
};
