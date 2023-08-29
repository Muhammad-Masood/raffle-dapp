import { routes } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <Link href="/">
        <p className="text-xl lg:text-2xl font-semibold pr-2">Raffl3</p>
      </Link>

      <div>
        <div className="items-center space-x-10 hidden md:block ">
          {routes.map((route) => (
            <Link href={route.path}>{route.name}</Link>
          ))}
          <Button>Connect Wallet</Button>
        </div>

        <div className="flex items-center lg:hidden md:hidden space-x-5">
          <Link href={routes[1].path}>{routes[1].name}</Link>
          <Button>Connect Wallet</Button>
        </div>
        <div></div>
      </div>
    </div>
  );
};
