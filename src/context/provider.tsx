
import { FC, useState } from "react"
import AppContext from "./context"

type TState = {
    value: string,
    role: 'admin' | 'user'
}
const MyProvider: FC<{children: any}> = ({children}) => {
    const [state, setState] = useState<TState>({
        value: 'test',
        role: 'user'
    })
    const handler = (val: string) => {
        setState({...state, value: val})
    }
    const auhtHandler = () => {
        setState({...state, role: 'admin'})
    }
    return (
        <AppContext.Provider value={{value: state.value, role: state.role, handler: handler, auhtHandler: auhtHandler}}>{children}</AppContext.Provider>
    )
}
export default MyProvider;