"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ListVideo, Menu, MessageCircleMore, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn, slideInOut } from "@/lib/utils";
import { useTransitionRouter } from "next-view-transitions";

export const SideBar = () => {
  const pathname = usePathname();
  const [isChat, setIsChat] = useState(false);
  const router = useTransitionRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (pathname === "/app/chat") {
      setIsChat(true);
    } else {
      setIsChat(false);
    }
  }, [pathname]);

  const onclickRoute = (isVideo: boolean) => {
    setIsOpen(false);
    setTimeout(() => {
      router.push(isVideo ? "/app/chat" : "/app/video-library", {
        onTransitionReady: slideInOut,
      });
    }, 500);
  };

  return (
    <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>
        <Menu size={20} />
      </DrawerTrigger>
      <DrawerContent className="w-screen max-w-screen bg-dark !border-0 text-light p-0">
        {/* 👆 makes drawer full width */}
        <DrawerHeader className="p-0">
          <DrawerTitle className="flex items-center justify-end w-full text-light p-4 border-b-[1px] border-b-light/10 h-[64px]">
            <DrawerClose>
              <X size={20} />
            </DrawerClose>
          </DrawerTitle>
        </DrawerHeader>

        <div className="h-full flex flex-col w-full">
          <div className="p-4 flex flex-col gap-y-3 flex-grow">
            <button
              type="button"
              className={cn(
                "w-full text-left flex items-center gap-x-2 px-4 py-3 rounded-md",
                {
                  "bg-blue-500/10 border-blue-800 border-2 text-blue-300":
                    isChat,
                }
              )}
              onClick={() => onclickRoute(true)}
            >
              <MessageCircleMore size={20} />
              AI Coach
            </button>
            <button
              type="button"
              className={cn(
                "w-full text-left flex items-center gap-x-2  px-4 py-3 rounded-md",
                {
                  "bg-blue-500/10 border-blue-800 border-2 text-blue-300":
                    !isChat,
                }
              )}
              onClick={() => onclickRoute(false)}
            >
              <ListVideo size={20} />
              Video library
            </button>
          </div>

          <div className="p-3 flex items-center justify-center bg-light/5">
            <p className="text-xs">
              Unrivaled {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
