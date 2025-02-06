import Link from "next/link";
export default function Projet() {
    return (
            <div>
                <h1 className="text-4xl font-bold mb-10 text-center">Projets</h1>
                <div className="flex gap-4">
                    <Link href="/projet/1">Projet 1</Link>
                    <Link href="/projet/2">Projet 2</Link>
                    <Link href="/projet/3">Projet 3</Link>

                </div>



            </div>


    );
}

