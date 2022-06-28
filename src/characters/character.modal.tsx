import React from "react"
import { FC, useState } from "react"
import { Button, Modal } from "react-bootstrap"
import IceandfireApi from "../services/iceandfire"
import { Character } from "../types/type"

type Props = {
    modalIsVisible: boolean,
    handleModal: Function,
    characterUrl: string | null,
    list: Array<any>
}
const CharterModal: FC<Props> = ({handleModal, modalIsVisible, characterUrl, list}) => {
    console.log('props:', characterUrl, modalIsVisible, list);
    
    const [character, setCharacter] = useState<null | Character>(null)
    const [loadingCharacter, setLoadingCharacter] = useState<boolean>(false)
    const [errorCharacter, setErrorCharacter] = useState<boolean>(false)
    
    return (
        <Modal show={modalIsVisible} onHide={handleModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{character?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/*<span className="title">Name:</span>{charter?.name || "undefinde"}*/}
            {character && (
                <>
                  <span className="title">Name:</span>{character?.name}
                </>
            )}

            {/*{charter?.name && (*/}
            {/*    <div>*/}
            {/*      <small>Name:</small>*/}
            {/*      <span>{charter?.name}</span>*/}
            {/*    </div>*/}
            {/*)}*/}

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
        </Modal>
    )
}
// export default React.memo(CharterModal, (prevP, nextP) => {
//     if (prevP.characterUrl === null && nextP.characterUrl === null) return true
//     return false
// }) либо
export default React.memo(CharterModal)