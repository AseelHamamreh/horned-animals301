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
  // TestFunction= () =>{
  //   this.setState({
  //     jsonData.filter(animal => animal.hornes === 1).map(filteredAnimal => (
  //     data: filteredAnimal.hornes;
  //     )};
  // }

  render(){
    return( this.state.data.map(todo => {
      return (
        <section>
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
