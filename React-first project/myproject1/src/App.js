// 30-6-2023
import pic from"./1.jpg"
function App(){
    return(
        <>
        <h2>welcome ducat</h2>
        <p>Hello user</p>
        <img src={pic} height="200px" width="300px" alt="..."/>  
        <img src="image/2.jpg" height="200px" width="300px"   alt="..."/>
        </>
    )
}
export default App

/*
import data from "./style.module.css"
import kuchbhi from "./style.module.css"
function App(){
    return(
        <>
        <h2 className={data.txt}>welcome ducat</h2>
        <p className={kuchbhi.txt2}>Hello user</p>
        </>
    )
}
export default App
*/

/*
//external css
import"./app.css"
function App(){
    return(
        <>
        <div className="data data2">welcome shahnawaz</div>
        <h2 className="data2">App component</h2>
        <p>Hello user</p>
        </>
    )
}
export default App
*/

/*
//inline css
import {useState} from "react"
function App(){
let[check,setcheck]=useState(false)

let show=()=>{
    // setcheck(check=true)
    setcheck(check ? false:true)
}
    let data={
        background:"orange"
    }
    if(check){
        data.background="blue"
    }

    return(
        <>
        <h2 style={data}>App component</h2>
        <p>Hello user</p>
        <button onClick={show}>click</button>
        </>
    )
}
export default App
*/

// 29-06-2023
/*
function App(){

    let data={
        background:"orange",
        fontSize:"45px",
        padding:"30px"
    }
    let data2={textAlign:"center"}

    return(
        <>
        <h2 style={{...data,...data2,color:"red"}}>App component</h2>
        <p style={data2}>Hello user</p>
        </>
    )
}
export default App
/*

/*
import User from "./function/User"
import Guest from "./function/Guest"
function App(){

    let check=true
    return(check && <User/>)
}
export default App

*/

/*
import User from "./function/User"
import Guest from "./function/Guest"
function App(){

    let check=false
    if(check){
        return<User/>
    }
    return <Guest/>
}
export default App
*/

/*
import React,{useState,useEffect} from 'react';
function App(){
    let[no,setno]=useState(100)
    let[sno,setsno]=useState(150)
    useEffect(()=>{
        console.log("use effect called");
    },[sno])
    
    let show=()=>{
        setno(no=no+2)
    }
    let dec=()=>{
        setsno(sno=sno-1)
    }
    return(
        <>
        <h2>Ap component</h2>
        <h2>Number={no}</h2>
        <button onClick={show}>click</button>
        <h2>Second no={sno}</h2>        
        <button onClick={dec}>click</button>
        </>
    )
}
export default App
*/

/*
// 28-06-2023
import React from 'react';
function App(){
    
    let show=(e)=>{
        console.log("button click");
        // console.log(e);
        console.log(e.target);
    }
    return(
        <>
        <h2>Ap component</h2>
        <button onClick={(e)=>{show(e)}}>click</button>
        </>
    )
}
export default App

*/

/* 
import React from "react";
function App(){
    let show=()=>{
        console.log("button click");
    }
    return(
        <>
        <h2>Ap component</h2>
        <button onClick={show}>click</button>
        </>
    )
}
export default App

/*


/*
import React,{Component} from 'react';
export default class App extends Component{
    state={
        name:"amit",
        nroll:this.props.roll
    }
    show=()=>{
        this.setState({nroll:205})
    }
    render(){
        return(
            <>
            <h2>App parent component</h2>
            <h2>Roll no with props={this.props.roll}</h2>
            <h2>Roll no with state={this.state.nroll}</h2>
            <button onClick={this.show} >Click</button>
            </>
        )
    }
}

*/


/*


import React,{Component} from 'react';
export default class App extends Component{
    state={
        name:"amit",
        age:30
    }
    show=()=>{
        this.setState({name:"sumit", age:35})
        // this.setState({name:"sumit"})
        // this.setState({age:20})
    }
    render(){
        return(
            <>
            <h2>App parent component</h2>
            <h2>Name={this.state.name}</h2>
            <h2>Age={this.state.age}</h2>
            <button onClick={this.show} >Click</button>
            </>
        )
    }
}
*/


/*
import React,{Component} from 'react';
export default class App extends Component{
    state={
        id:10
    }
    show=(sno)=>{
        console.log(sno+"-deleted");
    }
    render(){
        return(
            <>
            <h2>App parent component</h2>
            <button onClick={()=>{this.show(this.state.id)}}>Click</button>
            </>
        )
    }
}
*/
/*
import React,{Component} from 'react';
export default class App extends Component{
    show=()=>{
        console.log("button click")
    }
    render(){
        return(
            <>
            <h2>App parent component</h2>
            <button onClick={this.show}>Click</button>
            </>
        )
    }
}
*/

/* import Student from './class/Student'
function App(){
    return(
        <>
        <h2>App parent component</h2>
        <hr/>
        <Student roll="100"/>
        </>
    )
}
export default App

*/


/* import User from "./function/User"

 function App(props){
    return(
        <>
        <h2>App parent component</h2>
        <hr/>
        <User naam={props.name}/>
        </>
    )
}
export default App
 */ 


 /*
 import User from "./function/User"

function App(){
    return(
        <>
        <h2>App parent component</h2>
        <hr/>
        <User name="amit" roll="102"/>
        <hr/>
        <User name="sumit" roll="103"/>
        <hr/>
        <User name="rahul" roll="104"/>
        <hr/>
        <User name="hari" roll="105"/>
        <hr/>
        </>
    )
}
export default App

*/



/*import React,{Component} from "react";

class App extends Component{
    render(){
        return(
            <>
            <h2>this is class component</h2>
            <h2>Hello user</h2>
            </>
        )
    }
}
export default App
*/

/*

function App(){
    return(
        <h2>App function component</h2>
    )
}

export default App

*/
