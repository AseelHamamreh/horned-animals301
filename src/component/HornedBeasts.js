import React from 'react';

class HornedBeasts extends React.Component {
  render(){
    return(
      <div>
        <section>
          <h2>{this.props.title}</h2>
          <img src={this.props.ImageURL}/>
          <p>{this.props.descrebtion}</p>
        </section>
      </div>
    );
  }
}

export default HornedBeasts;
