import Image from "next/image";
import box from "../../public/box.png";
import heroImage from "../../public/heroImage.png";
import { Button } from "./ui/button";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:space-x-20 pt-11 lg:pt-20 space-y-10">
      <div>
        <p className="tracking-widest text-xs pb-1 pt-1">ITS TIME FOR A</p>

        <div className="space-y-8 pb-6">
          {/* <p className="font-bold text-6xl lg:text-8xl">BIG WIN</p> */}
          <p className="text-6xl font-extrabold lg:text-8xl md:text-8xl">
            BIG <span className="text-green-500">WIN</span>
          </p>
          <p className="max-w-md">
            A completely decentralized lottery that securely keeps users'funds.
            Picks up a truly random winner from the participants and transfer
            funds to it. Perform all these tasks automatically and puctually.
          </p>
        </div>

        <Link href="/lottery" className="">
          <Button className="rounded-full">Participate Now</Button>
        </Link>
      </div>

      {/* <div className=""> */}
        <Image src={heroImage} alt="hero_image" ></Image>
      {/* </div> */}
    </div>
  );
};
