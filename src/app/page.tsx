import { DetailCard } from "@/components/DetailCard";
import { Hero } from "@/components/Hero";
import { WinnersData } from "@/components/WinnersData";

export default function Home() {
  return (
    <div className="space-y-10">
      <Hero/>
      <WinnersData/>
      <DetailCard/>
    </div>
  )
}
