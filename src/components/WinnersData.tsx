import Link from "next/link";
import { EventLog, Log, ethers } from "ethers";


interface WinnerEventProps {
    topEvents:(Log|EventLog)[];
}

export const WinnersData:React.FC<WinnerEventProps> = ({topEvents}) => {
    return (
    <div>
      <p className="text-3xl lg:text-4xl md:text-4xl font-semibold text-center">
        RECENT WINNERS
      </p>
      <div className="pt-8 space-y-4">
        {topEvents.length===0?<p className="font-semibold text-xl text-center">No Draw Yet</p> :
        topEvents.map((event:any,index)=>(
            <div key={index} className="flex gap-x-4 flex-col lg:flex-row md:flex-row lg:justify-center">
             <Link href="/" className="break-words text-lg font-mono">
               {event.args[0]}
             </Link>
             <p>{event.args[1]}</p>
             </div>  
         ))}
      </div>
    </div>
  );
};
