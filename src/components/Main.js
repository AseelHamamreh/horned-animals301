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
    return( this.state.data.map(todo => {
      return (
        <section>
          {/* <Aseel imageURL={todo.image_url}
            title={todo.title}
            description={todo.description}
          /> */}
          <HornedBeast imageURL={todo.image_url}
            title={todo.title}
            description={todo.description}
          />
        </section>
      );
    }));
  }
}
export default Main;
