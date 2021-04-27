import React from 'react';
import HornedBeast from './HornedBeast ';
import jsonData from '../assest/data.json';

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      data: jsonData,
    };
  }
  render(){
    return( this.state.data.map(result => {
      return (
        <section>
          <HornedBeast imageURL={result.image_url} 
            title={result.title} 
            description={result.description}
          />
        </section>
      );
    }));
  }
}
export default Main;
