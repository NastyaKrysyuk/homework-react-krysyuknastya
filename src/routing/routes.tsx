import { FC, useContext } from "react";
import { Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { useRoutes } from "react-router-dom";
import Books from "../books";
import Characters from "../characters";
import CharactersF from "../characters/characters-f";
import FormComponent from "../components/form";
import AppContext from "../context/context";

import { TRoute } from "../types/route";
import { Paths } from "./path";

export const ChartersRoutes: TRoute[] = [
    {path: '', element: <CharactersF/>, name: 'Characters'},
    {path: Paths.character, element: <Characters/>, name: 'Characters1'},
]


const TestComponent: FC<{children: any}> = ({children}) => {
    return (
        <>
            <div>extra Books</div>
            {children}
        </> 
    )
}

export const Routes: TRoute[] = [
    {path: Paths.main, element: null, name: 'Home'},
    {path: Paths.characters, children: ChartersRoutes, name: 'Characters'},
    {path: Paths.books, element: (
        <TestComponent>
            <Books/>
        </TestComponent> 
    ), name: 'Books'},
    {path: Paths.form, element: <FormComponent/>, userRole: 'admin', name: 'Form'},
]


function AppRouting () {
    const context = useContext(AppContext)
    console.log(Routes);
    
    const routesValidate = () => {
        //@ts-ignore
        if (context.role === 'user') {
            return Routes.filter((el) => el.userRole !== 'admin')
        }
        return Routes
    }
    return (
        <>
            {useRoutes(routesValidate())}
            <Button onClick={() => {
                //@ts-ignore
                context.auhtHandler()
            }}>Login</Button>
        </>
        )
}
export default AppRouting