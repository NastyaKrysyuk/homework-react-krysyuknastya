import { useContext } from "react"
import { NavLink } from "react-router-dom"
import AppContext from "../../context/context"
import { Paths } from "../../routing/path"
import {Routes} from "../../routing/routes"

const Header = () => {
    const context: any = useContext(AppContext)
    // const routesValidate = () => {
    //     if (context.role === 'user') {
    //         return Routes.filter((el) => el.userRole !== 'admin')
    //     }
    //     return Routes
    // }
    return (
        <header className="header">
            {/* {routesValidate().map((el) => {
                return (
                    <NavLink key={el.path} to={el.path}>{el.name}</NavLink>
                )
            })} */}
            <NavLink to={Paths.main}>Home</NavLink>
            <NavLink to={Paths.characters}>Characters</NavLink>
            <NavLink to={Paths.character}>Character</NavLink>
            <NavLink to={Paths.books}>Books</NavLink>
            {context?.role === 'admin' && (
                <NavLink to={Paths.form}>Form</NavLink>
            )}
        </header>
    )
}
export default Header