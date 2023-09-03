import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const routes = [
  {
    name:"Home",
    path:"/",
  },
  {
    name:"Lottery",
    path:"/lottery",
  },
  {
    name:"About Us",
    path:"#about",
  },
  {
    name:"FAQ",
    path:"#footer",
  }
]