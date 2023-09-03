
import { Hero } from "@/components/Hero";
import { DetailsCards } from "@/components/InfoCard";
import { WinnersData } from "@/components/WinnersData";
import { abi, contractAddress } from "@/contractData/context";
import { Contract, ethers } from "ethers";

export default async function Home() {
  const myProvider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_DEFAULT_RPC_URL);
  const contract = new Contract(contractAddress, abi, myProvider);
  const filter = contract.filters.WinnerPicked;
  const events = await contract.queryFilter(filter);
  const topEvents = events.slice(-3).reverse(); //getting the top 3 recent winners logs
  console.log(topEvents);
  return (
    <div className="space-y-28">
      <Hero />
      <WinnersData topEvents={topEvents} />
      <DetailsCards />
    </div>
  );
}
