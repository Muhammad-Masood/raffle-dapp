"use client";
import { useContext, useState } from "react";
import { Button } from "./ui/button";
import { ethers, toNumber } from "ethers";
import { WalletContext } from "@/providers/context";

export function ConnectWallet() {
  const { wallet, setWallet } = useContext(WalletContext);
  const { isConnected } = wallet;

  const handleConnect = async () => {
    if ((window as any).ethereum == undefined) {
      alert("Metamask is not installed!");
    } else {
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const signer = await provider.getSigner();
      toNumber((await provider.getNetwork()).chainId) !== 11155111
        ? alert("Connect to Sepolia TestNetwork")
        : setWallet({ provider: provider, signer: signer, isConnected: true });
    }
  };

  return (
    <div>
      <Button onClick={handleConnect}>
        {isConnected ? "Conneced" : "Connect Wallet"}
      </Button>
    </div>
  );
}
