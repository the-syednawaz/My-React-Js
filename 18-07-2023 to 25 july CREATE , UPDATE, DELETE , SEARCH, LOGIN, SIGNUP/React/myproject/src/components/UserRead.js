import React, { Component } from 'react'
import {AiFillEdit,AiFillDelete} from "react-icons/ai"
import {Link} from "react-router-dom"
export default class UserRead extends Component {
  constructor(){
    super()
    this.state={
      list:null
    }
  }
  getData=(()=>{    
  fetch("http://localhost:3000/users").then((res)=>{
    // console.log(res.json());
    res.json().then((result)=>{
      // console.log(result);
      this.setState({list:result})
    })
  })
  })
  componentDidMount(){
    this.getData()
  }
  delete(sno){
    fetch("http://localhost:3000/users/"+sno,{
      method:"DELETE"
    }).then((res)=>{
      res.json().then((result)=>{
        // alert("data delete")
        this.getData()
        window.location.href="/read"
      })
    })
  }
  render() {
    return (
      <>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Email</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  {this.state.list?<tbody>
    {this.state.list.map((item)=>{
      return(
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.email}</td>
          <td><Link to={'/update/'+item.id}><AiFillEdit/></Link></td>
          <td><Link to={'/delete/'+item.id} onClick={()=>{this.delete(item.id)}}><AiFillDelete/></Link></td>
        </tr>
      )
    })}
  </tbody>:<p>No data</p>}
</table>
      </>
    )
  }
}
