import React, { Component } from 'react';
import './Form.css';

let a;

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: ''
    };  
  } 

  handleChange = (event) => {
    // this.setState({ key: event.target.value }); 
    this.setState({ key: event.target.value.replace(/\*/g, '') });    
  }  

  render() {
    return (
      <div className="Form">
        <form>
          <label htmlFor="Character">Character: </label>
          <input 
            id="name"
            type="text"
            // onChange={( event ) => {
            //   const input = event.target;
            //   console.log('NAME:', input.name, 'VALUE:', input.value);
            // }}  
            onChange = { this.handleChange } 
          />
        </form>
        <h1>{ this.state.key }</h1>
      </div>
    );
  } 
}

export default Form;