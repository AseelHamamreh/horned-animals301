import React from 'react';
import HornedBeasts from './HornedBeasts';
import jsonData from '../assest/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import Form from 'react-bootstrap/Form';


class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data:jsonData,
    };
  }
  changingevent = (event) =>{
    event.preventDefault();
    const hornesNumber = event.target.value;
    this.setState({
      data:jsonData.filter(value => value.horns === Number(hornesNumber))
    });
  };
  render(){
    return(
      <div>
        <Form>
          <Form.Label>How many hornes? </Form.Label>
          <Form.Control as="select" onChange={this.changingevent}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>100</option>
          </Form.Control>
        </Form>
        <CardColumns>
          {this.state.data.map(element => {
            return <HornedBeasts
              ImageURL={element.image_url}
              title={element.title}
              description={element.description}
            />;
          })
          }
        </CardColumns>
      </div>
    );
  }
}

export default Main;
