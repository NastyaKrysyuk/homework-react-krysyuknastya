import { Modal, Button } from "react-bootstrap"


const ModalComponent = ({ show, onHide, name, born, gender, died, books, titles, onClick }:{
  show: boolean,
  onHide: any,
  name: string,
  born: string,
  gender: string,
  died: string,
  books: [] | string[],
  titles: [] | string[],
  onClick: any
}) => {
  return (
    <Modal show={show} onHide={onHide(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <span className="prop">Name:</span>{name}
          <span className="prop">Born:</span>{born}
          <span className="prop">Gender:</span>{gender}
          <span className="prop">Died:</span>{died}
          <span className="prop">Books:</span>{books.join(', ')}
          <span className="prop">Titles:</span>{titles.join(', ')}
        </>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClick(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={onClick(true)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalComponent