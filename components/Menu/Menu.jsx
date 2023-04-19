import MenuItem from "../MenuItem/MenuItem"
import { FocusContext, useFocusable} from "@noriginmedia/norigin-spatial-navigation"

const MENU_FOCUS_KEY = 'MENU'

export default function Menu() {
    const { ref, focusKey } = useFocusable({ focusKey: MENU_FOCUS_KEY })

    return (
        <FocusContext.Provider value={focusKey}>
            <div ref={ref} className='menu'>
                <MenuItem key='1' href='/' title='Inicio' />
                <MenuItem key='2' href='/peliculas' title='Películas' />
                <MenuItem key='3' href='/series' title='Series' />
            </div>
        </FocusContext.Provider>
    )
}