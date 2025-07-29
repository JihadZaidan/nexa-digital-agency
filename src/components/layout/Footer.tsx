import Link from "next/link";
import { navigation } from "@/data/navigation";
import { ArrowUpIcon } from "lucide-react";

export default function Footer() {
    <div className="max-w-full w-full lg:px-20 lg:py-20 sm:px-5 sm:pt-14 sm:pb-6 flex flex-col gap-30 bg-black">
        <div className="w-full gap-18 flex lg:flex-row sm:flex-col">
            <h1 className="text-[104px] text-white font-sans font-normal">
                Let's Make Something Cool
            </h1>
            <ul className="w-full md:w-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4 justify-center items-center">
                {navigation
                    .filter((item) => item.hideInNavbar || item.published)
                    .map((item) => (
                        <li key={item.url} className="nav-item text-right text-white text-lg">
                            <Link href={item.url} className="hover:text-white">
                                {item.label}
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
        <div className="border-t border-transparent flex flex-wrap gap-4 justify-between items-center text-white">
            <p className="text-center md:text-left">Copyright © 2024 Nexa</p>
            <div className="flex items-center cursor-pointer gap-2">
                <Link href="#" className="hover:text-white">
                    Back to top
                </Link>
                <ArrowUpIcon size={16} />
            </div>
        </div>
    </div>
}