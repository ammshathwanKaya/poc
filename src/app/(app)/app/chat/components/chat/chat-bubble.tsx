import { cn } from "@/lib/utils";
import { ChatMessage, UserType } from "../chat-container";
import { useMemo } from "react";
import { Copy, ThumbsDown, ThumbsUp, User } from "lucide-react";
import { VideoPlayer } from "./video-player";

export const ChatBubble = ({ conversation }: { conversation: ChatMessage }) => {
  const isBot = useMemo(() => {
    return conversation.userType === UserType.BOT;
  }, [conversation]);
  return (
    <div
      className={cn("flex  items-end gap-x-3", {
        "flex-row-reverse": isBot,
      })}
    >
      <div
        className={cn("p-4 text-light bg-zinc-800/70 rounded-md text-md", {
          "rounded-bl-none": isBot,
          "rounded-br-none bg-chat-gradient": !isBot,
        })}
      >
        {conversation?.message}

        {isBot && conversation?.video && (
          <div className="w-full mt-4">
            <VideoPlayer url={conversation?.video} />
          </div>
        )}

        {isBot && (
          <div className="w-full pt-4 border-t-[1px] border-gray-500/30 mt-4 flex items-center justify-between text-gray-400">
            <Copy size={16} />

            <div className="flex items-center gap-x-2">
              <ThumbsUp size={16} />
              <ThumbsDown size={16} />
            </div>
          </div>
        )}
      </div>
      <div className="size-8 min-w-8 rounded-full p-1 bg-white/5 flex items-center justify-center  border-[0.5px] border-white/10">
        {isBot && (
          <img src="/unrivaled.svg" alt="unrivaled" className="size-5" />
        )}
        {!isBot && <User size={16} className="text-gray-300" />}
      </div>
    </div>
  );
};
