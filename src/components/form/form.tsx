import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import Input from '../input'
import ModalComponent from '../modal'

//тип стейта
type TState = {
    name: string,
    born: string,
    died: string,
    gender: string,
    titles: string[] | [],
    books: string[] | []
}

//стейт типа TState
const initState: TState = {
    name: '',
    born: '',
    died: '',
    books: [''],
    gender: '',
    titles: [''],
}

const FormComponent = () => {
    //хук useState принимает стейт типа TState с дефолт значением initState
    const [state, setState] = useState<TState>(initState)
    const [modalIsVisible, setModalIsVisible] = useState<boolean>(false)

    const handleModal = (type: boolean) => () => {
        setModalIsVisible(type)
    }

    const handlerOnChange = (nameProp: keyof TState, i?: number) => (e: any) => {
        if (i) {
            console.log(i)
            const booksFromState: string[] | string = state[nameProp];
            if (typeof booksFromState == "object") {
                booksFromState[i] = e.target.value;
                setState({ ...state, [nameProp]: booksFromState })
            }
        } else setState({ ...state, [nameProp]: e.target.value })
    }

    const handlerOnClick = (nameProp: keyof TState) => (e: any) => {
        const titles: string[] | string = state[nameProp];
        if (typeof titles == "object") {
            titles.push('')
            setState({ ...state, [nameProp]: titles })
        }
    }

    return (
        <div className="form">
            <Form onSubmit={(e: any) => {
                e.preventDefault()
            }}>
                <div className="wrapper">
                    <Input type="text" placeholder="name" value={state.name} name={'name'} onChange={handlerOnChange('name')} />
                    <Input type="date" placeholder="died" value={state.died} name={'died'} onChange={handlerOnChange('died')} />
                    <Input type="text" placeholder="gender" value={state.gender} name={'gender'} onChange={handlerOnChange('gender')} />
                    <Input type="date" placeholder="born" value={state.born} name={'born'} onChange={handlerOnChange('born')} />
                </div>

                <div className="wrapper">
                    {state.books.map((el, i) => (
                        <div key={i}>
                            {/* <Input type="text" placeholder="books" value={state.books[i]} name={`book ${i + 1}`} onChange={handlerOnChange('books',i)} /> */}
                            <Input type="text" placeholder="books" value={state.books[i]} name={`book ${i + 1}`} onChange={(e: any) => {
                                //вынести
                                const booksFromState = state.books;
                                booksFromState[i] = e.target.value;
                                setState({ ...state, books: booksFromState })
                            }} />
                        </div>
                    ))}
                </div>
                <div className="wrapper">
                    {state.titles.map((el, i) => (
                        <div key={i}>
                            {/* <Input type="text" placeholder="titles" value={state.titles[i]} name={`title ${i + 1}`} onChange={handlerOnChange('titles',i)} /> */}
                            <Input type="text" placeholder="titles" value={state.titles[i]} name={`title ${i + 1}`} onChange={(e: any) => {
                                //вынести
                                const titlesFromState = state.titles;
                                titlesFromState[i] = e.target.value;
                                setState({ ...state, titles: titlesFromState })
                            }} />
                        </div>
                    ))}
                </div>

                <Button onClick={handlerOnClick('titles')}>Add title</Button>

                <Button onClick={handlerOnClick('books')}>Add book</Button>

                <Button type={'submit'} onClick={handleModal(true)}>submit</Button>
            </Form>
            <ModalComponent
                show={modalIsVisible}
                onHide={handleModal}
                name={state.name}
                born={state.born}
                gender={state.gender}
                died={state.died}
                books={state.books}
                titles={state.titles}
                onClick={handleModal}
            />
        </div>
    )
}
export default FormComponent