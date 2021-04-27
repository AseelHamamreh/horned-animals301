import React from 'react';
import HornedBeast from './HornedBeast ';

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      // titles = ['UniWhal','Rhino Family','Unicorn Head','UniLego','Basically a unicorn','#truth','Baby Rhino','Cera','Narwhal costume','Rhino costume','Believe','Markhor','Baby markhor','Mouflon','Addax','Baby mouflon','Happy Jacksons Chameleon','Serious Jacksons Chameleon'+'Horned Lizard','Smaug'],
      title1:'UniWhal',
      description1:'A unicorn and a narwhal nuzzling their horns',
      imageURL1:'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
      title2:'Rhino Family',
      description2:'Mother (or father) rhino with two babies',
      imageURL2:'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80',
      title3:'Unicorn Head',
      description3:'Someone wearing a creepy unicorn head mask',
      imageURL3:'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg',
    };
  }
  render(){
    return(
      <div>
        <HornedBeast imageURL={this.state.imageURL1} 
          title={this.state.title1} 
          description={this.state.description1}
        />

            
        <HornedBeast imageURL={this.state.imageURL2} 
          title={this.state.title2} 
          description={this.state.description2}
        />

        <HornedBeast imageURL={this.state.imageURL3} 
          title={this.state.title3} 
          description={this.state.description3}
        />
      </div>
    );
  }
}
export default Main;
