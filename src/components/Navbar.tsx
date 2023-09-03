import { routes } from "@/lib/utils";
import Link from "next/link";
import { ConnectWallet } from "./ConnectWallet";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <Link href="/" className="bg-black">
        <p className="text-xl lg:text-2xl font-semibold px-2 tracking-widest">
          Raffl3
        </p>
      </Link>

      <div>
        <div className="lg:flex items-center space-x-10 hidden md:flex ">
          {routes.map((route) => (
            <Link href={route.path} key={route.path}>
              {route.name}
            </Link>
          ))}
          <ConnectWallet />
        </div>

        <div className="flex items-center lg:hidden md:hidden space-x-5">
          <Link href={routes[1].path} key={routes[1].path}>
            {routes[1].name}
          </Link>
          <ConnectWallet />
        </div>
      </div>
    </div>
  );
};
