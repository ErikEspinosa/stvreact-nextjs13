import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <Image 
                        src="https://www.clarovideo.com/webclient/sk_core/images/clarovideo-logo-sitio.svg" 
                        width={150}
                        height={50}
                        alt="Claro Video"
                        priority
                    />
                </div>
                <ul className="menu">
                    <li><Link href="/">Inicio</Link></li>
                    <li><Link href="/peliculas">Peliculas</Link></li>
                    <li><Link href="/series">Series</Link></li>
                    <li><Link href="/tv-vivo">TV en vivo</Link></li>
                </ul>
            </div>
        </header>
    )
}