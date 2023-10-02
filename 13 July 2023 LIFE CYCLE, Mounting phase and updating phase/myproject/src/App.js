import User from './User';
import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      no:1
    }
  }
  show=()=>{
    return this.setState({no:this.state.no+1})
  }
  render() {
    return (
      <>
      <h2>App Component</h2>
      <User data={this.state.no}/>
      <button onClick={this.show}>click</button>
      </>
    )
  }
}


/* 
//Mounting phase

import User from './User';
import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    console.log("constructor called");
    this.state = {
      name: "amit"
    }
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    console.log(props, state);
    return null
  }
  componentDidMount(){
    console.log("componentDidMount called");
  }
  render() {
    console.log("render called");
    return (
      <>
      <h2>App Component</h2>
      <User/>
      </>
    )
  }
}

*/