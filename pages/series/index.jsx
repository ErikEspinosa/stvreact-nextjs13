import Image from "next/image"
import Pau from '../../public/pau.jpg'

export default function Series() {
    return (
        <>
            <h1>Series</h1>
            <Image 
                src={Pau}
                width={400}
                height={400}
                alt="Series"
            />
        </>
        
    )
}