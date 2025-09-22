"use client";
import { IVdeoLibrary } from "../../../video-library/page";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const ViewVideo = ({ video }: { video: IVdeoLibrary }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="overflow-hidden rounded-md bg-light/5">
          <img src={video?.thumbnailUrl} alt={video?.title} />
          <div className="p-3 w-full overflow-hidden flex flex-col gap-y-1 items-start">
            <p className="text-md truncate overflow-hidden w-full">
              {video?.title}
            </p>
            <p className="text-xs truncate text-light/50  overflow-hidden">
              {video?.fileSize}
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent
        className="bg-dark border-light/10 p-4 overflow-hidden"
        showCloseButton={false}
      >
        <DialogHeader className="overflow-hidden p-0">
          <DialogTitle className="flex items-center overflow-hidden w-full">
            <p className="truncate overflow-hidden w-full">{video?.title}</p>
          </DialogTitle>
        </DialogHeader>

        <div className="w-full mt-3">{video?.videoUrl}</div>
      </DialogContent>
    </Dialog>
  );
};
