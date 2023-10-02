import React from 'react'
import { MyContext } from './App'
function Guest() {
  return (
    <>

    <h2>Guest Component</h2>
    <MyContext.Consumer>
        {pro=><h4>{pro}</h4>}
    </MyContext.Consumer>
    </>
  )
}

export default Guest