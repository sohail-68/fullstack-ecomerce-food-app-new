// import React, { useState } from 'react'
// import Parent from "../src/formValidation/Parent"
// import Form from './formValidation/Form'
// import Formone from './formValidation/Formone'
// import "./App.css"
// const App = () => {

//   const[show,setshow]=useState("form")


//   return (
    


// <>
// <ul>
//   <li onClick={()=>setshow("form")}
//   className={`${show==="form"?"helo":""}`}

//   >form</li>
//   <li onClick={()=>setshow("parent")}
//   className={`${show==="parent"?"s":""}`}
  
//   >parent</li>
// </ul>

// {
//   show==="form"? <Form
//   show={show}
//   setshow={setshow}
//   />:  
//   <Parent
  
//   show={show}
//   setshow={setshow}
//   />

// }

// </>


//   )
// }

// export default App


import React from 'react'
import Locastorge from './LocalStroge/Locastorge'
import Form from './formValidation/Form'
import ProductList from './ProductList/ProductList'
import "./App.css"

const App = () => {
  return (
    <div>
{/* <Form/> */}

      {/* <Locastorge/> */}
      <ProductList/>
    </div>
  )
}

export default App