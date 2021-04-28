import React from 'react';
import Form from 'react-bootstrap/Form';

class MyForm extends React.Component{
  render(){
    return(
      <Form>
        <Form.Label>How many hornes? </Form.Label>
        <Form.Control as="select" onChange={this.changeFunction}>
          <option>One</option>
          <option>Tow</option>
          <option>Three</option>
          <option>100</option>
        </Form.Control>
      </Form>
    );
  }
}
export default MyForm;
