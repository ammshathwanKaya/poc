"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
} from "react";

const AppConfigContext = createContext<IAppConfigContext | undefined>(
  undefined
);

type AppConfigProviderProps = {
  children: ReactNode;
};

type IAppConfigContext = {
  preloading: boolean;
  simulatePreloading: () => void;
};

export const AppConfigProvider: FC<AppConfigProviderProps> = ({ children }) => {
  const [preloading, setPreloading] = useState<boolean>(false);

  const simulatePreloading = () => {
    setPreloading(true);
    setTimeout(() => {
      setPreloading(false);
    }, 3000);
  };

  return (
    <AppConfigContext.Provider value={{ preloading, simulatePreloading }}>
      {children}
    </AppConfigContext.Provider>
  );
};

export const useAppConfig = (): IAppConfigContext => {
  const context = useContext(AppConfigContext);
  if (!context) {
    throw new Error("useAppConfig must be used within an AppConfigProvider");
  }
  return context;
};
