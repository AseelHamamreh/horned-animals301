import React from 'react';
import Button from 'react-bootstrap/Button';

class Aseel extends React.Component{
  constructor(props){
    super(props);
    this.state={
      show:false,
      setShow:false
    };
  }
  handleClose = () => {
    this.setState({
      setShow: false,
    });
  }
  handleShow = () => {
    this.setState({
      setShow: true,
    });
  }

  render(){
    return(
      <>
        <Button variant="primary" onClick={this.handleShow}>
        Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.Title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default Aseel;
