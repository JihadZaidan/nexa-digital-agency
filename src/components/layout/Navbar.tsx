'use client'

import Link from "next/link"
import { HiX } from "react-icons/hi"
import { FiMenu } from "react-icons/fi"
import { navigation } from "@/data/navigation"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const isDashboard = pathname === "/";
    const logoSrc = isDashboard ? "/public/Nexa.png" : "/public/Nexa.png";
    return (
        <header className="w-full max-w-full mt-5 px-20 justify-center items-center">
            <nav className="w-full justify-between flex items-center">
                <div>
                    <h4 className="text-4xl font-normal font-sans text-black">Nexa</h4>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-row justify-center gap-2">
                        <p className="text-black text-lg font-medium">Let’s talk</p>
                        <ArrowRight height={18} width={18} className="mt-[5px] text-black" />
                    </div>
                </div>
            </nav>
        </header>
    )
}