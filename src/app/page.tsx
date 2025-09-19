"use client";
import GettingStarted from "@/components/getting-started";
import { useAppConfig } from "@/context";

export default function Home() {
  const { simulatePreloading } = useAppConfig();

  return <GettingStarted onGettingStart={simulatePreloading} />;
}
