import "./index.css";
import html from "../../public/languages/html.svg";
import css from "../../public/languages/css.svg";
import nextjs from "../../public/languages/nextjs.svg";
import js from "../../public/languages/js.svg";
import cursor from "../../public/languages/cursor.svg";
import visualStudioCode from "../../public/languages/visual-studio-code.svg";
import androidStudio from "../../public/languages/androidstudio.svg";
import visualStudioCommunity from "../../public/languages/visual-studio.svg";
import git from "../../public/languages/git.svg";
import github from "../../public/languages/github.svg";
import linux from "../../public/languages/linux.svg";
import kaliLinux from "../../public/languages/kaliLinux.svg";
import windows from "../../public/languages/windows.svg";
import windowsServer from "../../public/languages/windowsserver.svg";
import nginx from "../../public/languages/nginx.svg";
import apache2 from "../../public/languages/apache.svg";
import cloudflare from "../../public/languages/cloudflare.svg";
import android from "../../public/languages/android.svg";
import mariadb from "../../public/languages/mariadb.svg";
import mysql from "../../public/languages/mysql.svg";
import phpmyadmin from "../../public/languages/phpmyadmin.svg";
import googlePlayConsole from "../../public/languages/googleplayconsole.svg";
import react from "../../public/languages/react.svg";
import reactNative from "../../public/languages/react.svg";
import typescript from "../../public/languages/typescript.svg";
import electron from "../../public/languages/electronjs.svg";
import php from "../../public/languages/php.svg";
import tailwind from "../../public/languages/tailwindcss.svg";
import Image from "next/image";

export default function Experiences() {
    return (
        <div className="experiences">
            <h1>Mes domaines de compétences</h1>
            <div className="languages">
                <h1>Language de programmation / Framework</h1>
                <div className="languages-list">
                    <div className="language">
                        <Image src={html.src} alt="HTML" width={500} height={300} />
                        <h1>HTML</h1>
                    </div>
                    <div className="language">
                        <Image src={css.src} alt="CSS" width={500} height={300} />
                        <h1>CSS</h1>
                    </div>
                    <div className="language">
                        <Image src={js.src} alt="JS" width={500} height={300} />
                        <h1>JS</h1>
                    </div>
                    <div className="language">
                        <Image src={nextjs.src} alt="NextJS" width={500} height={300} />
                        <h1>NextJS</h1>
                    </div>
                    <div className="language">
                        <Image src={react.src} alt="React" width={500} height={300} />
                        <h1>React</h1>
                    </div>
                    <div className="language">
                        <Image src={reactNative.src} alt="React Native" width={500} height={300} />
                        <h1>React Native</h1>
                    </div>
                    <div className="language">
                        <Image src={typescript.src} alt="Typescript" width={500} height={300} />
                        <h1>Typescript</h1>
                    </div>
                    <div className="language">
                        <Image src={electron.src} alt="Electron" width={500} height={300} />
                        <h1>Electron</h1>
                    </div>
                    <div className="language">
                        <Image src={php.src} alt="PHP" width={500} height={300} />
                        <h1>PHP</h1>
                    </div>
                    <div className="language">
                        <Image src={tailwind.src} alt="Tailwind CSS" width={500} height={300} />
                        <h1>Tailwind CSS</h1>
                    </div>


                </div>
            </div>
            <div className="environments">
                <h1>Environnements / Utilitaires</h1>
                <div className="environments-list">
                    <div className="environment">
                        <Image src={cursor.src} alt="Cursor" width={500} height={300} />
                        <h1>Cursor</h1>
                    </div>
                    <div className="environment">
                        <Image src={visualStudioCode.src} alt="Visual Studio Code" width={500} height={300} />
                        <h1>Visual Studio Code</h1>
                    </div>
                    <div className="environment">
                        <Image src={androidStudio.src} alt="Android Studio" width={500} height={300} />
                        <h1>Android Studio</h1>
                    </div>
                    <div className="environment">
                        <Image src={visualStudioCommunity.src} alt="Visual Studio Community" width={500} height={300} />
                        <h1>Visual Studio Community</h1>
                    </div>
                    <div className="environment">
                        <Image src={git.src} alt="Git" width={500} height={300} />
                        <h1>Git</h1>
                    </div>
                    <div className="environment">
                        <Image src={github.src} alt="Github" width={500} height={300} />
                        <h1>Github</h1>
                    </div>
                    <div className="environment">
                        <Image src={linux.src} alt="Linux" width={500} height={300} />
                        <h1>Linux</h1>
                    </div>
                    <div className="environment">
                        <Image src={kaliLinux.src} alt="Kali Linux" width={500} height={300} />
                        <h1>Kali Linux</h1>
                    </div>
                    <div className="environment">
                        <Image src={windows.src} alt="Windows" width={500} height={300} />
                        <h1>Windows</h1>
                    </div>
                    <div className="environment">
                        <Image src={windowsServer.src} alt="Windows Server" width={500} height={300} />
                        <h1>Windows Server</h1>
                    </div>
                    <div className="environment">
                        <Image src={nginx.src} alt="Nginx" width={500} height={300} />
                        <h1>Nginx</h1>
                    </div>
                    <div className="environment">
                        <Image src={apache2.src} alt="Apache2" width={500} height={300} />
                        <h1>Apache2</h1>
                    </div>
                    <div className="environment">
                        <Image src={cloudflare.src} alt="Cloudflare" width={500} height={300} />
                        <h1>Cloudflare</h1>
                    </div>
                    <div className="environment">
                        <Image src={android.src} alt="Android" width={500} height={300} />
                        <h1>Android</h1>
                    </div>
                    <div className="environment">
                        <Image src={mariadb.src} alt="MariaDB" width={500} height={300} />
                        <h1>MariaDB</h1>
                    </div>
                    <div className="environment">
                        <Image src={mysql.src} alt="MySQL" width={500} height={300} />
                        <h1>MySQL</h1>
                    </div>
                    <div className="environment">
                        <Image src={phpmyadmin.src} alt="PhpMyAdmin" width={500} height={300} />
                        <h1>PhpMyAdmin</h1>
                    </div>
                    <div className="environment">
                        <Image src={googlePlayConsole.src} alt="Google Play Console" width={500} height={300} />
                        <h1>Google Play Console</h1>
                    </div>
                </div>
            </div>
        </div>
    );

}
