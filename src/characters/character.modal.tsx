import React from "react"
import { FC } from "react"
import { Button, Modal } from "react-bootstrap"
import useFetch from "../hooks/useFetch";
import IceandfireApi from "../services/iceandfire";
import { Character } from "../types/type";

type Props = {
  modalIsVisible: boolean,
  handleModal: Function,
  characterUrl: string | null,
  list: Array<any>
}
const CharacterModal: FC<Props> = ({ handleModal, modalIsVisible, characterUrl, list }) => {
  console.log('props:', characterUrl, modalIsVisible, list);

  //КАСТОМНЫЙ ХУК useCharacter
  const { data, loading } = useFetch<Character>(IceandfireApi.getCharterInfo, characterUrl);


  //КАСТОМНЫЙ ХУК ДЛЯ
  // const [character, setCharacter] = useState<null | Character>(null)
  // const [loadingCharacter, setLoadingCharacter] = useState<boolean>(false)
  // const [errorCharacter, setErrorCharacter] = useState<boolean>(false)

  return (
    <Modal show={modalIsVisible} onHide={handleModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{data?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loading && 'loafing'}
        {!loading && data && (
          <>
            {data && (
              <>
                <div>
                  <small className="prop" >Name:</small>
                  <span>{data?.name}</span>
                </div>
                <span className="prop">Gender:</span>{data?.gender}
                <span className="prop">Aliases:</span>{data?.aliases}
              </>
              
            )}
          </>
        )}

        
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
export default React.memo(CharacterModal)