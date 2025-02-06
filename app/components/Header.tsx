"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Header() {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleLinkClick = () => {
        setSidebarOpen(false);
    };

    return (
        <header className={`${sidebarOpen ? 'bigheader' : ''}`}>
            <div className="name">
                <h1 className="purple">Aymeric</h1>
                <h1>Cousin</h1>
            </div>
            <div className="hamburger" onClick={toggleSidebar}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav className={`navbar ${sidebarOpen ? 'open' : ''}`}>
                <ul className="nav-links small-screen">
                    <li><Link href="/" onClick={handleLinkClick} className={pathname === "/" ? "border-b-2 border-white" : ""}>Accueil</Link></li>
                    <li><Link href="/experiences" onClick={handleLinkClick} className={pathname === "/experiences" ? "border-b-2 border-white" : ""}>Expériences</Link></li>
                    <li><Link href="/projet" onClick={handleLinkClick} className={pathname.startsWith("/projet") ? "border-b-2 border-white" : ""}>Projets</Link></li>
                    <li><Link href="/cv" onClick={handleLinkClick} className={pathname === "/cv" ? "border-b-2 border-white" : ""}>CV</Link></li>
                    <li><Link href="/contact" onClick={handleLinkClick} className={pathname === "/contact" ? "border-b-2 border-white" : ""}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
} 