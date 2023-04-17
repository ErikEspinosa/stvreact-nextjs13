import Image from "next/image"
import Angel from '../../public/angel.jpg'

export default function TvVivo() {
    return (
        <>
            <h1>TV en vivo</h1>
            <Image 
                src={Angel}
                width={400}
                height={400}
                alt="TV en vivo"
            />
        </>
        
    )
}