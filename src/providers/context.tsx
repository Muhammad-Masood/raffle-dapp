"use client"
import { createContext, useState } from "react";
import {ThemeProvider} from "next-themes";
import { JsonRpcProvider, JsonRpcSigner } from "ethers";

export const WalletContext = createContext<any>({});

type Wallet = {
  provider: JsonRpcProvider | {};
  signer: JsonRpcSigner | {};
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
