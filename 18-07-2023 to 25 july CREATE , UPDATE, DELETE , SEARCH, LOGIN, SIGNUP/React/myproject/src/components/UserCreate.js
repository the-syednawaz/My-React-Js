import React, { Component } from 'react'

export default class UserCreate extends Component {
  constructor() {
    super()
    this.state = {
      name: null,
      age: null,
      email: null
    }
  }
  submit = () => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    }).then((res)=>{
res.json().then((result)=>{
  window.location.href="/read"
})
    })
  }
  render() {
    console.log(this.state);
    return (
      <>
        <form method='POST'>
          <div className="mb-3">
            <label className="form-label">Name- :</label>
            <input type="text" name="name" className="form-control" placeholder="enter name" onChange={(e) => { this.setState({ name: e.target.value }) }} />
          </div>
          <div className="mb-3">
            <label className="form-label">Age- :</label>
            <input type="number" name="age" className="form-control" placeholder="enter age" onChange={(e) => { this.setState({ age: e.target.value }) }} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email- :</label>
            <input type="email" name="email" className="form-control" placeholder="enter email" onChange={(e) => { this.setState({ email: e.target.value }) }} />
          </div>
          <div className="mb-3">
            <input type="submit" name="sub" className="form-control bg-danger" onClick={this.submit} />
          </div>
        </form>
      </>
    )
  }
}
