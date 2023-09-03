"use client";

import { Button } from "@/components/ui/button";
import { abi, contractAddress } from "@/contractData/context";
import { WalletContext } from "@/providers/context";
import { ethers, Contract, parseEther } from "ethers";
import { useContext, useEffect, useState } from "react";
import {
  Days,
  Hours,
  Minutes,
  Seconds,
  timeConversion,
} from "../../lib/countdown";
import { Coins, PersonStanding } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

type Time = {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
};

export default function page() {
  const [totalPlayers, setTotalPlayers] = useState<number>();
  const [isLoading, setIsLoading] = useState(true);

  const { wallet } = useContext(WalletContext);
  const { provider, signer, isConnected } = wallet;
  const contract = new Contract(contractAddress, abi, provider);
  const contractTx = new Contract(contractAddress, abi, signer);

  const [countdown, setCountdown] = useState<Time>({
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
  });

  const { seconds, minutes, hours, days } = countdown;

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

  useEffect(() => {
    async function fetchAndSetMyContractData() {
      try {
        const myProvider = new ethers.JsonRpcProvider(
          process.env.NEXT_PUBLIC_DEFAULT_RPC_URL
        );
        const myContract = new Contract(contractAddress, abi, myProvider);
        const lastTimestamp:number = parseInt(await myContract.getLastTimeStamp());
        const duration:number = parseInt(await myContract.getRaffleDuration());
        const participants = await myContract.getParticipants();
        setIsLoading(false);
        const timeLeft = ((duration + lastTimestamp) - (Date.now() / 1000)); // draw time - current time
        const { secs, mins, hours, days } = timeConversion(timeLeft);
        setCountdown({
          seconds: secs,
          minutes: mins,
          hours: hours,
          days: days,
        });
        setTotalPlayers(participants.length);
      } catch (error) {
        console.log("fetch_myContract_data", error);
      }
    }
    fetchAndSetMyContractData();

    setInterval(() => {
      setCountdown((prevCountdown) => {
        const { seconds } = prevCountdown; //prev second
        if (seconds === 0) {
          const { minutes } = prevCountdown;
          if (minutes === 0) {
            const { hours } = prevCountdown;
            if (hours === 0) {
              const { days } = prevCountdown;
              if (days === 0) {
                return {
                  seconds: Seconds,
                  minutes: Minutes,
                  hours: Hours,
                  days: Days,
                };
              }
              return {
                seconds: Seconds,
                minutes: Minutes,
                hours: Hours,
                days: days - 1,
              };
            }
            return {
              ...prevCountdown,
              seconds: Seconds,
              minutes: Minutes,
              hours: hours - 1,
            };
          }
          return { ...prevCountdown, seconds: Seconds, minutes: minutes - 1 };
        }
        return { ...prevCountdown, seconds: seconds - 1 };
      });
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col gap-y-7 items-center justify-center pt-24">
      <div className="">
        <p className="text-3xl lg:text-5xl font-bold pb-2">Next Draw In</p>
        {/* Timer of the duration */}
        {isLoading ? (
          <Skeleton className="text-center w-[160px] h-[30px]" />
        ) : (
          <p className="text-2xl font-semibold text-center">
            {`${days < 10 ? "0" + days : days}:${
              hours < 10 ? "0" + hours : hours
            }:${minutes < 10 ? "0" + minutes : minutes}:${
              seconds < 10 ? "0" + seconds : seconds
            }`}
          </p>
        )}
      </div>

      <div className="bg-zinc-800 rounded-xl p-6 space-y-4">
        <div>
          <Badge className="h-8">Price 0.01 ETH</Badge>
        </div>

        <div>
          <Badge>
            {isLoading ? (
              <Skeleton className="w-[64px] h-[20px] rounded-full bg-gray-400" />
            ) : (
              <p className="flex items-center">
                Players {!totalPlayers?0:totalPlayers} <PersonStanding />
              </p>
            )}
          </Badge>
        </div>

        <Button onClick={handleEnterRaffle} className="">
          Purchase Lottery <Coins className="pl-1" />
        </Button>
        <p className="w-36 font-mono tracking-tight">Note: Make sure you're connected to Sepolia TestNetwork</p>
      </div>
    </div>
  );
}
