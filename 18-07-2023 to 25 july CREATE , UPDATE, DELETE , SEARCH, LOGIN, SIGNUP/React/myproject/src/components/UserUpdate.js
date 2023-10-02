import React, { Component } from 'react'
import withRouter from './withRouter'
 class UserUpdate extends Component {
  constructor(){
    super()
    this.state={
      name:null,
      age:null,
      email:null
    }
  }
  getData(){
    fetch("http://localhost:3000/users/"+this.props.params.id).then((res)=>{
      res.json().then((result)=>{
// console.log(result);
this.setState({name:result.name,age:result.age,email:result.email})
      })
    })
  }
  componentDidMount(){
    this.getData( )
  }
  update(){
    fetch("http://localhost:3000/users/"+this.props.params.id,{
      method:"PUT",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(this.state)
    }).then((res)=>{
      res.json().then((result)=>{
        window.location.href="/read"
      })
    })
  }


  render() {
    console.log(this.props.params.id);
    return (
      <>
    <div className="mb-3">
  <label className="form-label">Name- :</label>
  <input type="text" name="name" className="form-control" value={this.state.name} placeholder="enter name" onChange={(e)=>{this.setState({name:e.target.value})}}/>
</div>
    <div className="mb-3">
  <label className="form-label">Age- :</label>
  <input type="number" name="age" className="form-control" value={this.state.age} placeholder="enter age" onChange={(e)=>{this.setState({age:e.target.value})}}/>
</div>
    <div className="mb-3">
  <label className="form-label">Email- :</label>
  <input type="email" name="email" className="form-control" value={this.state.email} placeholder="enter email" onChange={(e)=>{this.setState({email:e.target.value})}}/>
</div>
    <div className="mb-3">
  <input type="submit" name="sub" className="form-control bg-danger" value="update" onClick={()=>{this.update()}} />
</div>
    </>
    )
  }
}
export default withRouter(UserUpdate)