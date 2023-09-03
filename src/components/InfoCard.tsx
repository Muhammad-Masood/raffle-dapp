import { Card } from "./ui/card";

const info = [
  "Keeps all of the funds of users in a smart contract to assure trust and security",
  "Uses Chainlink VRF to allocate random winner cryptographically",
  "Works with Chainlink Automation to perform all the taks automatically, and punctually in every 3 days",
];

export const DetailsCards = () => {
  return (
    <div className="bg-cyan-950" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8 gap-y-6 p-5">
        {info.map((text, index) => (
          <Card key={index} info={text} />
        ))}
      </div>
    </div>
  );
};
