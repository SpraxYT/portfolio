import Link from "next/link";
import "./index.css";
import "./home.css";
import profile from "../public/profile.jpg";
import Image from "next/image";
export default function Home() {
    return (
        <>
            <div className="home">
                <div className="homeText">
                    <div className="homeTitle">
                        <h3>Bonjour, je suis</h3>
                        <h1>Aymeric Cousin</h1>
                        <h3>et je suis <span className="typing purple">Développeur Full Stack</span></h3>
                    </div>
                    <div className="homeDesc">
                        <p>
                            Bonjour, je suis Aymeric Cousin, un développeur full stack passionné par la création de sites web et d'applications mobiles. 
                            J'aime produire des sites web et des applications mobiles qui sont fonctionnels, esthétiques et performants. 
                            Je suis un passionné de nouvelles technologies et de leur application dans la vie quotidienne. <br />
                            Je pratique de multiples langages de programmation et de frameworks. <br />
                            Comme le HTML / CSS / JavaScript / PHP / MySQL / TypeScript / REACT / REACT NATIVE / NEXT / EXPO / ELECTRON <br />
                            Ainsi que de nombreux environnement comme GIT / GITHUB / LINUX / ANDROID / WINDOWS / WINDOWS SERVER / NGINX / APACHE2 / CLOUDFLARE <br />
                        </p>
                    </div>
                    <div className="homeButton">
                        <Link href="/projet"><button>Voir mes projets</button></Link>
                        <Link href="/contact"><button>Me contacter</button></Link>
                        <Link href="/cv"><button>Télécharger mon CV</button></Link>
                    </div>

                </div>
                <div className="homeImage">
                    <Image src={profile.src} alt="home" width={500} height={300} />
                </div>
            </div>
            {/* <div className="home">
                <div className="homeText">  
                    <h1>Home</h1>
                </div>
            </div> */}
        </>
    )


}
