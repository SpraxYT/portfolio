import Image from "next/image";
import Link from "next/link";
import "./index.css";
import project1 from "../../public/project/arlinfo.com.png";
import project2 from "../../public/project/logicaisse.png";
import project3 from "../../public/project/moulinrouge.png";
import project4 from "../../public/project/logicaissemanagement.jpg";
import project5 from "../../public/project/yannclicker.jpg";
import project6 from "../../public/project/portfolio.png";
export default function Projet() {
    return (
        <>
            <div className="projet">
                <h1>Mes projets</h1>
                <div className="project-category">
                    <h1>Site Web</h1>
                    <div className="project-list">
                        <div className="project">
                            <Image src={project6.src} alt="This Portfolio" width={500} height={300} />
                            <h1>Mon Portfolio</h1>
                            <p>NEXT JS / Tailwind CSS / TypeScript / React / MySQL</p>
                            <p>Site web de mon portfolio</p>
                            <p>Ce site est un exemple parfait pour montrer mes compétences en développement web</p>
                            <Link href="/" className="project-link">
                                Voir le projet
                            </Link>
                        </div>
                        <div className="project">
                            <Image src={project1.src} alt="Arlinfo.com" width={500} height={300} />
                            <h1>Arlinfo</h1>
                            <p>HTML / CSS / JS / PHP / MySQL</p>
                            <p>Site web de l'entreprise Arlinfo.com</p>
                            <p>Vente de matériel informatique / Pc Gamer</p>
                            <Link href="https://arlinfo.com" className="project-link">
                                Voir le projet
                            </Link>
                        </div>
                        <div className="project">
                            <Image src={project2.src} alt="Logicaisse" width={500} height={300} />
                            <h1>Logicaisse En Production</h1>
                            <p>HTML / CSS / JS / PHP / MySQL</p>
                            <p>Logiciel de gestion de caisse enregistreuse</p>
                            <p>Réalisation d'un logiciel de gestion de caisse enregistreuse</p>
                            <Link href="https://app.logicaisse.cous1.fr" className="project-link">
                                Voir le projet
                            </Link>
                        </div>
                        <div className="project">
                            <Image src={project3.src} alt="Hotel Moulin Rouge" width={500} height={300} />
                            <h1>Hotel Moulin Rouge Fictif</h1>
                            <p>HTML / CSS / JS</p>
                            <p>Site web fictif de l'hotel Moulin Rouge</p>
                            <p>Réalisation d'un site web fictif de l'hotel Moulin Rouge</p>
                            <Link href="https://projet007.dev.cous1.fr/accueil.html" className="project-link">
                                Voir le projet
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="project-category">
                    <h1>Application Mobile</h1>
                    <div className="project-list">
                        <div className="project">
                            <Image src={project4.src} alt="Logicaisse Management" width={500} height={300} />
                            <h1>Logicaisse Management En Production</h1>
                            <p>TypeScript / EXPO / React Native / PHP API / MySQL</p>
                            <p>Application mobile (Android / IOS) de Logicaisse</p>
                            <p>Celle ci permet d'avoir un apperçu des statistiques de la caisse enregistreuse</p>
                            <Link href="https://app.logicaisse.cous1.fr" className="project-link">
                                Voir le projet
                            </Link>
                        </div>
                        <div className="project">
                            <Image src={project5.src} alt="YannClicker" width={500} height={300} />
                            <h1>YannClicker En Development</h1>
                            <p>TypeScript / EXPO / React Native / PHP API / MySQL</p>
                            <p>Jeux (Android / IOS) de clic</p>
                            <p>le but du jeux est de cliquer sur le bouton le plus vite possible</p>
                            <button>Voir le projet</button>
                        </div>
                        <div className="project">
                            <Image src={project5.src} alt="MusicPlayer" width={500} height={300} />
                            <h1>ARL Music Player En Projet</h1>
                            <p>Kotlin / Java / Android Studio / PHP API / MySQL</p>
                            <p>Application mobile (Android / IOS) de lecture de musique</p>
                            <p>Celle ci permet de lire des musiques</p>
                            <button>Voir le projet</button>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
}

