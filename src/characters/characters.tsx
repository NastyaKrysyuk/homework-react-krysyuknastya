import { Character } from "../types/type";
import React from "react";
import IceandfireApi, { getData } from "../services/iceandfire";
import { Button, ButtonGroup, ListGroup, Modal } from "react-bootstrap";


//тип для пропсов любой
type TProps = any;
//тип для состояния
type TState = {
  characters: [] | Character[];
  isLoading: boolean;
  isError: boolean;
  page: number;
  pageSize: number;
  info: null | Character;
  show: boolean;
}
export default class Characters extends React.Component<TProps, TState>{
  state = {
    characters: [],
    isLoading: false,
    isError: false,
    page: 1,
    pageSize: 5,
    info: {
      aliases: ['Lamprey'],
      allegiances: ['https://www.anapioficeandfire.com/api/houses/15'],
      books: ['https://www.anapioficeandfire.com/api/books/3'],
      born: "",
      culture: "",
      died: "",
      father: "",
      gender: "Male",
      mother: "",
      name: "",
      playedBy: [''],
      povBooks: [],
      spouse: "",
      titles: [''],
      tvSeries: [''],
      url: "https://www.anapioficeandfire.com/api/characters/3",
    },
    show: false
  }

  getCharcters = () => {
    console.log("запрос..")
    const { page, pageSize } = this.state;
    this.setState({ isLoading: true })
    IceandfireApi.getCharacters(page, pageSize)
      //всё ок выводим результат, загрузка завершена
      .then((res: Character[]) => { this.setState({ characters: res, isLoading: false }) })
      //не ок выводим ошибку загрузка завершена
      .catch((err: any) => { this.setState({ isError: true, isLoading: false }) })
  }

  componentDidMount() {
    this.getCharcters();
  }

  handlerPage = (type: "left" | "right") => {
    if (type === "left" && this.state.page > 1) {
      this.setState({ ...this.state, page: this.state.page - 1 });
    } else
      this.setState({ ...this.state, page: this.state.page + 1 });
    this.getCharcters();
  };

  componentDidUpdate() {
    console.log("componentDidUpdate");
    if (this.state.characters.length == 0 && this.state.isLoading == false) {
      this.setState({ ...this.state, page: 1 })
      this.getCharcters();
    }
  }

  handlerClickCharacter = (url: string) => {
    IceandfireApi.getCharterInfo(url)
      .then((res: Character) => {
        console.log("Oтвет типа: " + typeof res)
        console.log("Ответ: "+ res)
      // console.log("Ответ: "+ JSON.parse(JSON.stringify(res)))
        this.setState({ info: res, isLoading: false })
      })
    this.handleShow()
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  handleShow = () => {
    this.setState({ show: true })
  }

  render() {
    const { characters, isLoading, isError } = this.state;
    return (

      <div className="characters">
        <ListGroup>
          {isError && "Error"}
          {isLoading && "Loading"}
          {characters &&
            !isError &&
            !isLoading &&
            characters.map((el: Character) => (
              <>
                <ListGroup.Item as="li" key={el.url} onClick={(_e) => { this.handlerClickCharacter(el.url) }}>
                  <span className="title">{el.name || el.aliases}</span>
                  <span>Gender: {el.gender}</span>
                </ListGroup.Item>
                <Modal show={this.state.show} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {this.state.info && this.state.info.gender}
                    {/* <span className="title">Aliases: </span>{`${el.aliases}`}
                    <br></br>
                    <span className="title">Gender: </span>{`${el.gender}`} */}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            ))
          }
        </ListGroup>
        {characters && !isError && (
          <ButtonGroup className="books-nav" aria-label="Basic example" >
            <Button
              variant="secondary"
              disabled={this.state.page === 1}
              onClick={(_e: any) => this.handlerPage("left")}
            >
              left
            </Button>
            <Button
              variant="secondary"
              onClick={(_e: any) => this.handlerPage("right")}>
              right
            </Button>
          </ButtonGroup>
        )}
      </div>
    )
  }
}
