import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class HornedBeasts extends React.Component {
  constructor(props){
    super(props);
    this.state={
      pattingNumber:0,
      show:false,
      setShow:false,
    };
  }
  pattingFunction = () =>{
    this.setState ({
      pattingNumber: this.state.pattingNumber + 1,
    });
  }
  handleClose = () =>{
    this.setState ({
      setShow:false,
    });
  }
  handleShow = () =>{
    this.setState ({
      setShow:true,
    });
  }

  render(){
    return(
      <section>
        <>

          <Modal show={this.state.setShow} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
            <img src={this.props.ImageURL}/>
            <Modal.Body>{this.props.description}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
               Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
        <Card style={{ width: '18rem' }}>
          <Card.Img onClick={this.handleShow} variant="top" src={this.props.ImageURL} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            ❤️ {this.state.pattingNumber}
            </Card.Text>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Button onClick ={this.pattingFunction} variant="primary">Vote</Button>
          </Card.Body>
        </Card>
      </section>
    );
  }
}

export default HornedBeasts;
