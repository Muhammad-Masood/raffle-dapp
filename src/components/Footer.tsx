import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

export const Footer = () => {
  return (
    <div className="flex flex-grow pt-20 w-full">
        <div className="w-full opacity-40 text-center">
        
          <div className="flex text-center font-mono tracking-wider justify-center items-center gap-x-4"> 
          <Link href="https://www.linkedin.com/in/muhammad-masood-b9a091248/"><Linkedin/></Link>
          <p>Muhammad Masood</p>
          <Link href="https://github.com/Muhammad-Masood"><Github/></Link>
           </div>
        </div>
    </div>
  )
}
