interface CardProps {
  info: string;
}

export const Card: React.FC<CardProps> = ({ info }) => {
  return (
    <div className="bg-blue-100 h-auto w-auto rounded-xl p-4 shadow-black drop-shadow-2xl hover:scale-105 duration-300 transition shadow-md lg:shadow-sm">
      <p className="tracking-wide text-base text-black cursor-pointer font-normal font-serif">
        {info}
      </p>
    </div>
  );
};
