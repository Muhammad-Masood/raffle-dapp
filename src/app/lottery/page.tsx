"use client";

import { Button } from "@/components/ui/button";
import { abi, contractAddress } from "@/contractData/context";
import { WalletContext } from "@/providers/context";
import { ethers, Contract, parseEther } from "ethers";
import { useContext } from "react";

export default function page() {
  const { wallet } = useContext(WalletContext);
  const { provider, signer, isConnected } = wallet;
  const contract = new Contract(contractAddress, abi, provider);
  const contractTx = new Contract(contractAddress, abi, signer);

  const handleEnterRaffle = async () => {
    if (!isConnected) {
      alert("Connect Wallet!");
    } else {
      try {
        const price: number = await contract.getLotteryPrice();
        const tx = await contractTx.enterRaffle({ value: price });
        await tx.wait();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex flex-col gap-y-7 items-center">
      <div>
        <p className="text-3xl lg:text-5xl font-bold">Next Draw In</p>
        {/* Timer of the duration */}
        <p className="text-xl font-semibold">Days:Hours:Mins:Secs</p>
      </div>
      <p>Enter the RAFFL3 in just 0.01 ETH!</p>
      <div className="bg-gray-100 h-[150px] w-[350px] ">
        <div className="min-h-full flex items-center justify-center">
          <Button onClick={handleEnterRaffle} className="">
            Purchase Lottery
          </Button>
        </div>
        </div>
    </div>
  );
}
