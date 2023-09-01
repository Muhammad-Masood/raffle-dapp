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

type Time = {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
};

export default function page() {
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
    // console.log(currentDate);
    if (!isConnected) {
      const myProvider = new ethers.JsonRpcProvider(
        "https://sepolia.infura.io/v3/4f653d2d351148769fd1017be6f45d45"
      );
      const myContract = new Contract(contractAddress, abi, myProvider);
      myContract
        .getLastTimeStamp()
        .then((timestamp) => {
          myContract.getRaffleDuration().then((duration) => {
            console.log(parseInt(duration), Date.now(), Date.now() / 1000);
            const timeLeft =
              parseInt(duration) + 1693510234 - Date.now() / 1000; // draw time - current time
            console.log("draw time left: ", timeLeft); //time left for the draw (in seconds)
            console.log(
              "secs: ",
              Math.floor(timeLeft % 60),
              "mins: ",
              Math.floor((timeLeft % 3600) / 60),
              "hours: ",
              Math.floor((timeLeft % (3600 * 24)) / 3600),
              "days: ",
              Math.floor(timeLeft / (3600 * 24))
            );
            const { secs, mins, hours, days } = timeConversion(timeLeft);
            setCountdown({
              seconds: secs,
              minutes: mins,
              hours: hours,
              days: days,
            });
          });
        })
        .catch((err) => console.log("Calculate timestamp", err));
    }

    setInterval(() => {
      setCountdown(prevCountdown => {
        const {seconds} = prevCountdown; //prev second
        if(seconds===0){
          const {minutes} = prevCountdown;
          if(minutes === 0){
            const {hours} = prevCountdown;
            if(hours === 0){
              const {days} = prevCountdown;
              if(days  === 0){
                console.log("Lottery Draw Time!");
              }
              return ({seconds:Seconds,minutes:Minutes,hours:Hours,days:days-1});
            }
            return ({...prevCountdown,seconds:Seconds,minutes:Minutes,hours:hours-1});
          }
          return ({...prevCountdown,seconds:Seconds,minutes:minutes-1});
        }
        return ({...prevCountdown,seconds:seconds-1});
      });
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col gap-y-7 items-center">
      <div>
        <p className="text-3xl lg:text-5xl font-bold">Next Draw In</p>
        {/* Timer of the duration */}
        <p className="text-xl font-semibold">{`${days<10?"0"+days:days}:${hours<10?"0"+hours:hours}:${minutes<10?"0"+minutes:minutes}:${seconds<10?"0"+seconds:seconds}`}</p>
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
