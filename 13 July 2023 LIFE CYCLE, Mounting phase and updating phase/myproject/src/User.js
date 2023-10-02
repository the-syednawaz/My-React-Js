// Life cycle

// Updating Phase

import React, { Component } from 'react'
export default class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uno: this.props.data
    }
  }
  static getDerivedStateFromProps(props, state) {
    console.log(" user getDerivedStateFromProps");
    if (props.data !== state.uno) {
      return { uno: props.data }
    }
    return null
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.uno < 8) {
      console.log("shouldComponentUpdate");
      console.log(nextProps, nextState);
      return true
    }
    console.log(nextProps, nextState);
    return false
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("getSnapshotBeforeUpdate called");
    console.log(prevProps, prevState);
    return 50
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("componentDidUpdate called");
    console.log(prevProps, prevState, snapshot);
  }

  render() {
    console.log("user render called");
    return (
      <>
        <h2>User</h2>
        <h2>Number={this.state.uno}</h2>
      </>
    )
  }
}


/*

// Mounting phase
import React, { Component } from 'react'
export default class User extends Component {
  render() {
    console.log("User render");
    return (
      <div>User</div>
    )
  }
}
*/
