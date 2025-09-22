"use client";
import { motion } from "framer-motion";
import { SideBar } from "../chat/components/chat/side-bar";
import { ViewVideo } from "../chat/components/chat/view-video";
import { ReactNode, useState } from "react";

export type IVdeoLibrary = {
  title: string;
  fileSize?: string;
  thumbnailUrl?: string;
  videoUrl: ReactNode;
};

const videoLibrary: IVdeoLibrary[] = [
  {
    title: "2 Ball Speed Stop, Step Through, Spin Outs - Chelsea Gray.mp4",
    fileSize: "403.8 MB",
    thumbnailUrl:
      "https://uc5a1b9bcddbfdcf24f27aa76912.previews.dropboxusercontent.com/p/thumb/ACy9k7aiIH25C8_V7DLcek2hbaRyWlCezI55Xg1hszKEJ6eDVaNLsg4arPvmSlxw82JvvabHDVV-4-5Qg-xu1Rl7HtPQrfKSnFGFXnpE--NFrRqyK4vgmV_ZaHl_8Sp8cf0heMI_SWIll9o_NX81923wGESFD8xZN0Q2ECKIoIAH9EP96UMrKL8oiVpppUcEqJ7x50xhd9pwLE2kRk0t-DpssMBnZ8AmTvKB_nUSBK79zQRslpIVuJY4I0_Jm2ZUCFFonDmGnE7PRTbpRQEYq3AtdenpvxmdF5jORSI1HyMpyA/p.jpeg?size=256x256&size_mode=2",
    videoUrl: (
      <video
        id={`video`}
        src="https://www.dropbox.com/scl/fi/mjin0w684cwo45qbaeeu4/video-response.mp4?rlkey=oppj82gjrkwfr2v3jtl07ypei&amp;st=d48igey3&amp;raw=1"
        controls
      />
    ),
  },
  {
    title: "3 Dribble Exchange - Chelsea Gray .mp4",
    fileSize: "217.7 MB",
    thumbnailUrl:
      "https://uc5a1b9bcddbfdcf24f27aa76912.previews.dropboxusercontent.com/p/thumb/ACzatfDKDNTUuejsdQZg_pSbiXXNvcm27D4T0_QpuGg4IC4_TlBfPOwQnBlqcu7_7Mri9y_2yt9b5s8XQa9QWEtZrw76RTt1ehrafr_dB-Ppf0e3yhf0FQzmSWjEQvSzicSTgaDZPUcJ4QYMVCn8pw8N6MU6OXmbxBCVJjg2QNub8HB06AsZF0JJ4KSRL3ajLkHtUMiDf1m6WVwRIJ_E92-EJtBlL21THiss_QFICK-iWnE8CLPq2CSVEXJ3BpRFH-cFcTP5EyYUkUb_OoNK0nkc5fP4kkiknB3a7OyVnnuK3g/p.jpeg?size=256x256&size_mode=2",
    videoUrl: (
      <video
        id={`video`}
        src="https://www.dropbox.com/scl/fi/mjin0w684cwo45qbaeeu4/video-response.mp4?rlkey=oppj82gjrkwfr2v3jtl07ypei&amp;st=d48igey3&amp;raw=1"
        controls
      />
    ),
  },
  {
    title: "Behind the Back from Pocket Dribble - Chelsea Gray.mp4",
    fileSize: "248.7 MB",
    thumbnailUrl:
      "https://uc5a1b9bcddbfdcf24f27aa76912.previews.dropboxusercontent.com/p/thumb/ACzvibu9-wmS-ZKsYxZPNVj1lnOlGxWPfYI-DOR3F2c5s_Nzul9JXE0Og7jvtYk54taxilfxrOw4VDVk0VXvnRSG5WeHECEc6POnjQeWP0Q4fZNJ2phLXD0s5_duJh9pT_vi4BqFF1OMkl4NvGYgROx5Jw28AMxgn42Y93bEu4evBCffbathVbidDkpwm4upHOICY3KSz-7_0cijsCIbHXUZS7DEuzgkIZbbmcxStQv_LjwrKTKIPoPMHwT4nXhwdAwDF4B5-R5nwQssdAG5MEdQcipohpK4W_1yxiDTMYsSDw/p.jpeg?size=256x256&size_mode=2",
    videoUrl: (
      <video
        id={`video`}
        src="https://www.dropbox.com/scl/fi/mjin0w684cwo45qbaeeu4/video-response.mp4?rlkey=oppj82gjrkwfr2v3jtl07ypei&amp;st=d48igey3&amp;raw=1"
        controls
      />
    ),
  },
  {
    title: "Double Exchange Behind the Back Passing - Chelsea Gray .mp4",
    fileSize: "229.7 MB",
    thumbnailUrl:
      "https://uc5a1b9bcddbfdcf24f27aa76912.previews.dropboxusercontent.com/p/thumb/ACzlwulbe0B_c5UiqY7_uwdSxSpn7_PV5xp88QLzE2S-UGd-1ZpnpKkCW3TcZPjvBZlZEF4vKByOrQ8Ij4W2WV9fprNbtk6y-J-ZEtsniUpZg4aqVVCwfMWsZp0S6DGKFYNVZl1ur0GpzXN9xRDj2PG6tU_0Y0ejgFBoGIFSeq9BhpUblZQaocP_KzOuSM0Znoe9cRbktgDmPs2tRcsnUEutgiDRklfg9DxC6YiYtuqNOmJ5EJfrfDcesfnUHe-6nrWcKsCm2l3NhqkZoJryaNNcHKh0VopDP6OzOb-YfCtd4Q/p.jpeg?size=256x256&size_mode=2",
    videoUrl: (
      <video
        id={`video`}
        src="https://www.dropbox.com/scl/fi/mjin0w684cwo45qbaeeu4/video-response.mp4?rlkey=oppj82gjrkwfr2v3jtl07ypei&amp;st=d48igey3&amp;raw=1"
        controls
      />
    ),
  },
  {
    title: "Double Exchange Peripheral Passing - Chelsea Gray.mp4",
    fileSize: "341.9 MB",
    thumbnailUrl:
      "https://uc5a1b9bcddbfdcf24f27aa76912.previews.dropboxusercontent.com/p/thumb/ACyEqiklgYul8KCw-n8Mg_GHWnYajiEWS5doU1De0NfD7lflmnH2gHMv86AULWTCuZzabi3KEfaOLL5lYsqsJHQsnJeJHxBajkbK5fMt7FFHjqKSmuQ_3B-tdpnjGlhWLkFN2_vhOhJTlKsRp8nwCShO5wKe1gwcx1gyjIt4u_Dy2i8wybWtXJeWNTo8WrFainEGBN5Urp64QUdxzeMGHExyPpUEP6giBwRS-5zQM6ij41PhEDIKbJ5arNrYTH5TdcX1i-bY0BFhrFYjKyBFD94OZO5KwVdtujGNg2lRLLQnzQ/p.jpeg?size=256x256&size_mode=2",
    videoUrl: (
      <video
        id={`video`}
        src="https://www.dropbox.com/scl/fi/mjin0w684cwo45qbaeeu4/video-response.mp4?rlkey=oppj82gjrkwfr2v3jtl07ypei&amp;st=d48igey3&amp;raw=1"
        controls
      />
    ),
  },
  {
    title: "Exchange Behind the back - Chelsea Gray.mp4",
    fileSize: "341.9 MB",
    thumbnailUrl:
      "https://uc5a1b9bcddbfdcf24f27aa76912.previews.dropboxusercontent.com/p/thumb/ACwJzzbaFnWjowOOYRPt24wRypJrC1_Me2N7wByPqxngKOjO1hBOuQks2QV5dT_5WvHbOUZuAQH1lMiovy1YQWMgX-eA8RrE1vsEll1lL6vwS4-GK5J7oHTVX1ctdnbxIhjvosQ9bj9CtsMjcPVPb38czYcG2qRvSRCOqHBTg6TEtPYbApzlVOpNS46oC6aAf8xZACS5WRO41gt-ZTk9S3OluvFAw5jIXABDaVsQraRm_QB8Ft1ChTEiF20Dbkll-ZH1SzXfXFemrK6zYDjvEKfkHsHgTgSBqVUPbZxouE-w5A/p.jpeg?size=256x256&size_mode=2",
    videoUrl: (
      <video
        id={`video`}
        src="https://www.dropbox.com/scl/fi/mjin0w684cwo45qbaeeu4/video-response.mp4?rlkey=oppj82gjrkwfr2v3jtl07ypei&amp;st=d48igey3&amp;raw=1"
        controls
      />
    ),
  },
  {
    title: "Exchange Behind the back - Chelsea Gray.mp4",
    fileSize: "204.9 MB",
    thumbnailUrl:
      "https://uc5a1b9bcddbfdcf24f27aa76912.previews.dropboxusercontent.com/p/thumb/ACyoFmW4gxEk8-Z_PtXpcAI64qoAcxk6aokJe6tcoCG5cWsYdyru1GMSe-aWwJldxw9p7OLwwtKkOMMntcjfpYm1Ihoxg7w0_cXves6cgzDgHga0SROAbUKQxFskRht4Qypsy1g2j6vzzy93uKQa0GOBgct7aOQWFcNE3tteFSmxm0Xn13MlisqTqQYzkLCrwdX8Yb5F5r1Tb4x1cEsiW4phfpLZjP3zcBsQXCBk4G1bD5SlNth8d7rXeTP4D7prSse-V5f7VDos7xItt69OwxjvJ0vOwEACC8if8c3IEAV8GQ/p.jpeg?size=256x256&size_mode=2",
    videoUrl: (
      <video
        id={`video`}
        src="https://www.dropbox.com/scl/fi/mjin0w684cwo45qbaeeu4/video-response.mp4?rlkey=oppj82gjrkwfr2v3jtl07ypei&amp;st=d48igey3&amp;raw=1"
        controls
      />
    ),
  },
];

const Page = () => {
  const [videoList, setVideoList] = useState<IVdeoLibrary[]>(videoLibrary);
  const [filterResult, setFilterResult] =
    useState<IVdeoLibrary[]>(videoLibrary);
  const [value, setValue] = useState<string>("");

  const onFilter = (value: string) => {
    if (!value) setFilterResult(videoList);
    const list = videoLibrary?.filter((video) => video?.title?.includes(value));
    setFilterResult(list);
  };

  return (
    <div className="h-dvh flex flex-col w-full overflow-hidden">
      <motion.div
        initial={{ height: 64 }}
        animate={{ height: 64 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="h-16 min-h-16 bg-white/2 flex-col border-b border-white/10"
      >
        <div className="w-full flex h-16 justify-between items-center px-4 ">
          <div className="flex items-center gap-x-3">
            <img src="/unrivaled.svg" alt="unrivaled" className="h-8" />
          </div>
          <div className="flex items-center gap-x-3">
            <SideBar />
          </div>
        </div>
      </motion.div>

      <div className="p-4">
        <div className="bg-white/5 w-full rounded-md mb-4 px-3">
          <input
            type="text"
            value={value}
            onChange={(e) => {
              onFilter(e?.target?.value);
              setValue(e?.target?.value);
            }}
            placeholder="Search..."
            className="min-h-12  flex items-center w-full focus:outline-none bg-transparent placeholder:text-white/50 text-white"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          {filterResult?.map((video, i) => (
            <ViewVideo video={video} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
