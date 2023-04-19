import Image from "next/image"
import Menu from "../Menu/Menu"

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
                <Menu />
            </div>
        </header>
    )
}