import { Character } from "../types/type";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import IceandfireApi from "../services/iceandfire";
import { Button, ButtonGroup, ListGroup, Modal } from "react-bootstrap";
import {useCharters} from "./charters.hooks";
import CharterModal from "./character.modal";



const CharactersF = () => {
  const {
    error, loading, characters, filter, handlerPage
  } = useCharters({initPage: 1, initPageSize: 5});

  // const [character, setCharacter] = useState<null | Character>(null)
  // const [loadingCharacter, setLoadingCharacter] = useState<boolean>(false)
  // const [errorCharacter, setErrorCharacter] = useState<boolean>(false)

  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false)
  const [characterUrl, setCharacterUrl] = useState<string | null>(null)
  
  
  
  // const list: any[] = []
  const list: any[] = useMemo(() => {
    return []
  }, [])

  
  

  const handleModal = (type: boolean) => () => {
    setModalIsVisible(type)
    if (!type) setCharacterUrl(null)
  }
  const handleModalMemorized = useCallback((type: boolean) => () => {
    setModalIsVisible(type)
    if (!type) setCharacterUrl(null)
  }, [characterUrl])
  
  // const handlerClickCharacter = (url: string) => {
  //   return async() => {
  //     setLoadingCharacter(true)
  //     try {
  //       const res = await IceandfireApi.getCharterInfo(url)
  //       setCharacter(res)
  //       handleModal(true)()
  //     } catch (e) {
  //       setErrorCharacter(true)
  //     } finally {
  //       setLoadingCharacter(false)
  //     }
  //   }
  // }

  const handlerClickCharacter = (url: string) => {
    return async() => {
      setCharacterUrl(url)
      setModalIsVisible(true)
  }}
  
  
  return (
    <div className="characters">
      <ListGroup>
          {error && "Error"}
          {loading && "Loading"}
          {characters &&
            !error &&
            !loading &&
            characters.map((el: Character) => (
              <ListGroup.Item 
                  as="li" 
                  key={el.url} 
                  onClick={handlerClickCharacter(el.url)}
                >
                  <span className="title">{el.name || el.aliases}</span>
                  <span className="prop">Gender: {el.gender}</span>
              </ListGroup.Item>
            ))
        }
      </ListGroup>
        {characters && !error && (
          <ButtonGroup className="books-nav" aria-label="Basic example" >
            <Button
              variant="secondary"
              disabled={filter.page === 1}
              onClick={handlerPage("left")}
            >
              left
            </Button>
            <Button
              variant="secondary"
              onClick={handlerPage("right")}>
              right
            </Button>
          </ButtonGroup>
        )}
        <CharterModal 
          list={list}
          characterUrl={characterUrl} 
          modalIsVisible={modalIsVisible} 
          handleModal={handleModalMemorized} 
        />
        
        {/* <Modal show={modalIsVisible} onHide={handleModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{character?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {character && (
                <>
                  <span className="title">Name:</span>{character?.name}
                </>
            )}

            <span className="prop">Gender:</span>{character?.gender}
            <span className="prop">Aliases:</span>{character?.aliases}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModal(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleModal(true)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal> */}
    </div>
  )
}
export default CharactersF;