import Image from "next/image"
import Yisus from '../../public/yisus.jpg'

export default function Peliculas() {
    return (
        <>
            <h1>Películas</h1>
            <Image 
                src={Yisus}
                width={400}
                height={400}
                alt="Películas"
            />
        </>
    )
}