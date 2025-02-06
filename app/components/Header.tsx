"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    return (
        <header className="p-4 bg-black text-white flex justify-between items-center border-b border-white w-full h-16">

            <nav className="flex gap-4 justify-center w-full">
                <ul className="flex gap-4 w-full justify-evenly items-center text-xl">
                    <li><Link href="/coucou" className={pathname === "/coucou" ? "border-b-2 border-white" : ""}>Coucou</Link></li>
                    <li><Link href="/" className={pathname === "/" ? "border-b-2 border-white" : ""}>Accueil</Link></li>
                    <li><Link href="/projet" className={pathname.startsWith("/projet") ? "border-b-2 border-white" : ""}>Projets</Link></li>
                </ul>

            </nav>
        </header>
    );
} 