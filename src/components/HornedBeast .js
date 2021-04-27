import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
class HornedBeast  extends React.Component{
  constructor(props){
    super(props);
    this.state={
      pattingNumber:0,
    };
  }
  increasePattingNumber = () => {
    this.setState({pattingNumber: this.state.pattingNumber+1});
  }
  render(){
    return(
      <section>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.imageURL} />
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
        </Card>\
      </section>
    );
  }
}
export default HornedBeast ;
