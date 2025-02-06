"use client"

import { usePathname } from "next/navigation";
export default function Footer() {
    const pathname = usePathname();
    return (

        <footer className="bg-black text-white p-4 w-full text-center h-16 border-t border-white">
            <p>Footer de la page {pathname}</p>
        </footer>

    );
}
