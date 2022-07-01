import { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"

//тип стейта
type TState = {
    name: string,
    born: string,
    books: string[] | []
}

//стейт типа TState
const initState: TState = {
    name: '',
    born: '',
    books: ['']
}

const FormComponent = () => {
    //хук useState принимает стейт типа TState с дефолт значением initState
    const [state, setState] = useState<TState>(initState)
    const [modalIsVisible, setModalIsVisible] = useState<boolean>(false)

    let book: string;

    const handleModal = (type: boolean) => () => {
        setModalIsVisible(type)
    }

    return (
        <div className="form">
            <Form onSubmit={(e: any) => {
                e.preventDefault()
            }}>
                <input
                    type="text"
                    placeholder="name"
                    value={state.name}
                    name={'name'}
                    onChange={(e) => {
                        setState({ ...state, name: e.target.value })
                    }}
                />
                <input
                    type="date"
                    placeholder="born"
                    value={state.born}
                    name={'born'}
                    onChange={(e) => {
                        setState({ ...state, born: e.target.value })
                    }}
                />
                {state.books.map((el, i) => (
                    <div key={i}>
                        <input
                            type="text"
                            placeholder="books"
                            value={state.books[i + 1]}
                            name={'books' + i}
                            onChange={(e) => {
                                book = e.target.value;
                                return book
                            }}
                        />
                    </div>
                ))}
                <Button onClick={(e: any) => {
                    const books: string[] = state.books;
                    books.push(book)
                    setState({ ...state, books: books })
                }}>add book</Button>

                <Button type={'submit'} onClick={handleModal(true)}>submit</Button>
            </Form>

            <Modal show={modalIsVisible} onHide={handleModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{state.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <span className="prop">Name:</span>{state.name}
                        <span className="prop">Born:</span>{state.born}
                        <span className="prop">Books:</span>{state.books.filter(el => el).join(', ')}
                    </>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleModal(true)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default FormComponent