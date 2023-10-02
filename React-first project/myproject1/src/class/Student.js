import React, { Component } from 'react'
 class Student extends Component{
    state={
        name:"amit",
        age:40,
        sroll:this.props.roll
    }
    render(){
        return(
            <>
            <h2>Student class component</h2>
            <h3>Name={this.state.name} age={this.state.age}</h3>
            <h3>roll no with props ={this.props.roll}</h3>
            <h2>roll no with state ={this.state.sroll}</h2>
            </>
        )

    }
}
export default Student