"use client"
import { createContext, useState } from "react";

export const WalletContext = createContext<any>({});

type Wallet = {
  provider: {};
  signer: {};
  isConnected: boolean;
};

export function WalletContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [wallet, setWallet] = useState<Wallet>({
    provider: {},
    signer: {},
    isConnected: false,
  });

  return (
    <div>
      <WalletContext.Provider value={{ wallet, setWallet }}>
        {children}
      </WalletContext.Provider>
    </div>
  );
}
