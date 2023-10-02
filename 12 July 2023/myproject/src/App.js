
//context API
import React from 'react'
import User from './User'
export const MyContext = React.createContext();
function App() {
  return (
    <>
      <h2>App Component</h2>
      <hr />
      <MyContext.Provider value="amit">
        <User />
      </MyContext.Provider>
    </>
  )
}

export default App

























/* news api axios 

import React,{useState,useEffect} from 'react'
import axios from 'axios'
function App() {
 let [item,setitem] =useState()

  async function getData(){
    let result=await axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=bcebd9c24f6745319d170e95333883ee')
    // console.log(result.data.articles);
    setitem(result.data.articles)

    // axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=bcebd9c24f6745319d170e95333883ee').then(( item)=>{    console.log(item.data.articles);})


  }
  // console.log(item);
  useEffect(()=>{
    getData()

  })
  return (
    <>
    <h2>App comp</h2>
    {item?<div>
      {item.map((pro)=>{
        return(
          <div>
            <h2>{pro.title}</h2>
            <img src={pro.urlToImage} height="300px" width="50%" alt='..' />
            <p>{pro.content}</p>
            <p>{pro.description}</p>
            <a href={pro.url} target='_blank'><button onClick={pro.url}>Read more</button></a>
          </div>
        )
      })}
    </div>:<p>No data</p>}
    </>
  )
}

export default App

*/