import { useState } from "react";
import { Button, Form, InputGroup } from 'react-bootstrap'

//тип стейта
type TState = {
  name: string,
  gender: string,
  books: string[] | []
}

//стейт
const initState: TState = {
  name: '',
  gender: '',
  books: ['']
}

const FormComponent = () => {
  //хук стейт, принимает initState типа TState
  const [state, setState] = useState<TState>(initState);

  return (
    <div className="form">
      <Form onSubmit={(e) => {
        e.preventDefault()
        console.log(state)
      }}>
        <InputGroup>
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
            type="text"
            placeholder="gender"
            value={state.gender}
            name={'gender'}
            onChange={(e) => {
              setState({ ...state, gender: e.target.value })
            }}
          />
          {state.books.map((el, i) => (
            <div key={i}>
              <input
                type="text"
                placeholder="books"
                value={state.books[i]}
                name={'books' + i}
                onChange={(e) => {
                  ///
                }}
              />
            </div>

          ))}
          <Button onClick={(e: any) => {
            const booksS: string[] = state.books;
            booksS.push('')
            setState({ ...state, books: booksS })
          }}>add book</Button>

          {/* <input 
                    ref={inputRef}
                    type="text" 
                    placeholder="text" 
                    name={'ref'}
                    onChange={handler}
                /> */}
          <Button type={'submit'}>submit</Button>
        </InputGroup>
      </Form>
    </div>
  )
}

export default FormComponent