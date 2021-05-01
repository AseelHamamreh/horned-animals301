import React from 'react';
import HornedBeasts from './HornedBeasts';
import jsonData from '../assest/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data:jsonData
    };
  }
  render(){
    return <>
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
    </> ; 

  }
}

export default Main;
