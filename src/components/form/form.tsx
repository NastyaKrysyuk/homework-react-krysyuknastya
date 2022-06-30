import { useRef, useState } from "react"
import { Button } from "react-bootstrap"

type TState = {
    name: string,
    born: string,
    books: string[] | []
}
const initState: TState = {
    name: '',
    born: '',
    books: ['']
}

const FormComponent = () => {
    const [state, setState] = useState<TState>(initState)
    // const inputRef = useRef(null)
    // console.log('render', inputRef);
    // const handler = (e: any) => {
    //     inputRef.current = e.target.value  
    // }
    const handler = (e: any) => {

    }
    return (
        <div className="form">
            <form onSubmit={(e: any) => {
                e.preventDefault()
                console.log(state);
                                 
            }}>
                <input 
                    type="text" 
                    placeholder="name" 
                    value={state.name}
                    name={'name'} 
                    onChange={(e) => {
                        setState({...state, name: e.target.value})
                    }}
                    // onBlur={(e: any) => {
                    //     //@ts-ignore
                    //     inputRef.current.focus()
                    // }}
                />
                <input 
                    type="date" 
                    placeholder="born" 
                    value={state.born}
                    name={'born'} 
                    onChange={(e) => {
                        setState({...state, born: e.target.value})
                    }}
                />
                {state.books.map((el, i) => (
                    <div key={i}>
                        <input 
                            type="text" 
                            placeholder="books" 
                            value={state.books[i]}
                            name={'books'+i} 
                            onChange={(e) => {
                                ///
                            }}
                        />
                    </div>
                    
                ))}
                <Button onClick={(e: any) => {
                    const booksS: string[] = state.books;
                    booksS.push('')
                    setState({...state, books: booksS})
                }}>add book</Button>

                {/* <input 
                    ref={inputRef}
                    type="text" 
                    placeholder="text" 
                    name={'ref'}
                    onChange={handler}
                /> */}
                <Button type={'submit'}>submit</Button>
            </form>
        </div>
    )
}
export default FormComponent