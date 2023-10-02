import React, { useState } from 'react'
import Menu from './Menu'

function App() {
  let [item, setitem] = useState(Menu) //here item is a variable and setitem is a method
  // console.log(item);

  let filterdata=(cat)=>{
    let filteritem=Menu.filter((curele)=>{
      return cat===curele.category
    })
    // console.log(filteritem);
    setitem(filteritem)
  }
  return (
    <>
    <div class="btn-group mb-4">
    <button type="button" class="btn btn-primary" onClick={()=>{filterdata('headphone')}}>Headphone</button>
    <button type="button" class="btn btn-primary" onClick={()=>{filterdata('mobile')}}>Mobile</button>
    <button type="button" class="btn btn-primary" onClick={()=>{filterdata('watch')}}>Watch</button>
    <button type="button" class="btn btn-primary" onClick={()=>{filterdata('shirt')}}>Shirt</button>
  </div>
    <div className='group'></div>
      <div className='container-fluid'>
        <div className='row'>
          {item.map((pro, index) => {
            return (
              <>
                <div className="card col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2" >
                  <img src={pro.Pimage} class="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{pro.Pname}</h5>
                    <p className="card-text">{pro.price} Category={pro.category}</p>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                  </div>
                key={index}
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App