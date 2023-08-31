import Link from "next/link"


const winners = [
    {
        address:"0x6a07bB46D93c4BF298E1aCf67bDBd163e7B793c6",
        prize:1233345.565
    },
    {
        address:"0x6a07bB46D93c4BF298E1aCf67bDBd163e7B793c6",
        prize:1233345.565
    },
    {
        address:"0x6a07bB46D93c4BF298E1aCf67bDBd163e7B793c6",
        prize:1233345.565
    },
    {
        address:"0x6a07bB46D93c4BF298E1aCf67bDBd163e7B793c6",
        prize:1233345.565
    },
    {
        address:"0x6a07bB46D93c4BF298E1aCf67bDBd163e7B793c6",
        prize:1233345.565
    },
]

export const WinnersData = () => {
    return(
        <div>
            <p className="text-3xl lg:text-4xl md:text-4xl font-semibold text-center">RECENT WINNERS</p>
            <div className="pt-8 space-y-4">
                {
                    winners.map((winner)=>(
                        <div key={winner.address} className="flex gap-x-4 flex-col lg:flex-row md:flex-row lg:justify-center">
                        <Link href="/" className="break-words text-lg">{winner.address}</Link>
                        <p>{winner.prize}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}