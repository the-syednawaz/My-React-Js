import React, { Component } from 'react'
import { AiOutlineSearch } from "react-icons/ai"
export default class UserSearch extends Component {
  constructor() {
    super()
    this.state = {
      searchItem: null,
      searchKey:null
    }
  }
  searchData(key) {
    // console.log(key);
    fetch("http://localhost:3000/users?q=" + key).then((res) => {
      res.json().then((result) => {
        // console.log(result);
        this.setState({ searchItem: result })
      })
    })
  }
  render() {
    return (
      <>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Search Data" onChange={(e) => { this.setState({searchKey:e.target.value}) }} />
          <button class="btn btn-outline-secondary" type="button" onClick={()=>{this.searchData(this.state.searchKey)}}><AiOutlineSearch /></button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          {this.state.searchItem ? <tbody>
            {
              this.state.searchItem.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                  </tr>
                )
              })
            }
          </tbody> : <p>NO DATA</p>}
        </table>

      </>
    )
  }
}
