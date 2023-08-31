import Image from "next/image"
import box from "../../public/box.png";
import { Button } from "./ui/button";
import Link from "next/link";


export const Hero = () => {

    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center ">
            <div>
            <p className="pt-20 lg:pt-0">ITS TIME FOR A</p>

            <div className="space-y-8">
            {/* <p className="font-bold text-6xl lg:text-8xl">BIG WIN</p> */}
            <p className="text-5xl font-extrabold lg:text-8xl md:text-8xl">BIG WIN</p>
            <p className="max-w-full">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, explicabo nostrum aperiam ex architecto distinctio necessitatibus dolorum velit sunt atque. Laudantium ea ad quasi. Mollitia quae dolor minus corporis libero!</p>
            
            </div>

            <div className="pt-4">
            <Link href="/lottery" className=""><Button className="rounded-full">Participate Now</Button></Link>
            </div>

            </div>
            
            <div>
                <Image src={box} alt="hero_image" ></Image>
            </div>

        </div>
    )
}