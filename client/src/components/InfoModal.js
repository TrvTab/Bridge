import {Button, Row, Col, Modal} from 'react-bootstrap'

function InfoModal(props) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          <h4>Commands that should be done using voice (voice commands must be issued exactly like the following to work)</h4>
          <h6> Note that the words with colons in front of them represent values that you will choose </h6> 
          <p>
            Add marker at a specific time = 'add marker called :name at :min minutes and :sec seconds'<br/>
            Add a loop that from one time stamp to another: 'Add loop called :name from :firstMin minutes and :firstSec seconds until :secondMin minutes and :secondSec seconds'<br/>
            Delete a marker by its name : 'Delete marker called :name'<br/>
            Delete a loop by its name : 'Delete loop called :name' <br/>


            
          </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}
export default InfoModal;