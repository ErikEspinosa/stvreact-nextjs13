import Link from "next/link"
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation"

export default function MenuItem(props) {
    const { ref, focused } = useFocusable()
    return (
        <Link 
            ref={ref} 
            className={ focused? 'focused' : '' } 
            href={props.href}
        >
            {props.title}
        </Link>
    )
}