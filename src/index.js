import React from "react";
import ReactDOM from 'react-dom/client';
import { useState } from "react";

function MyForm(){
  const [myCar, setMyCar] = useState("Volvo");
  const handleChange = (event) => {
    setMyCar(event.target.value)
  }
  return(
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Audi">Volvo</option>
        <option value="Mercedes">Fiat</option>
      </select>
    </form>
  )
}
// const myFirstElement = (
  
//   // <div>//this is method 1 to put multiple html tags 
//   //   <h1>pra1</h1>
//   //   <h2>para2</h2>
//   // </div>
//   // <>
//   //    <h1>para</h1>
//   //    <h2>para1</h2>
//   // </>
// )


// function MyForm(){
  
//   const [textarea, setTextarea] = useState(
//     "wow! A text area"
//   );
//   const handleChange = (event) => {
//     setTextarea(event.target.value)
//   }

//   return (
//     // <h1>Hello</h1>
//     <form>
//       <textarea value={textarea} onChange={handleChange} />
//     </form>
//   )
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />)