"use client"
import { useParams } from "next/navigation";
import Link from "next/link";
export default function ProjetDetails() {
    const params = useParams();
    return (
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-10 text-center">Voici le projet {params.id}</h1>
                <Link href="/projet" className="bg-blue-500 text-white px-4 py-2 rounded-md">Retour</Link>
            </div>
    );
}

