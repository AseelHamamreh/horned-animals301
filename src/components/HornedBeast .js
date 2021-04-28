import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class HornedBeast extends React.Component{
  constructor(props){
    super(props);
    this.state={
      pattingNumber:0,
      show:false,
      setShow:false
    };
  }
  increasePattingNumber = () => {
    this.setState({
      pattingNumber: this.state.pattingNumber+1
    });
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
      <section>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.imageURL} onClick={this.handleShow}/>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text >
            ❤️ {this.state.pattingNumber}
            </Card.Text>
            <Button onClick={this.increasePattingNumber} variant="primary">Vote</Button>
          </Card.Body>
        </Card>
        <>

          <Modal   style={{float:"right" }} show={this.state.setShow} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Card.Img variant="top" src={this.props.imageURL} onClick={this.handleShow}/>
            <Modal.Body>{this.props.description}</Modal.Body>
            <image src={this.props.imageURL}/>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
               Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </section>
    );
  }
}

export default HornedBeast;
