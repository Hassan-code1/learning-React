import React from 'react';
import ReactDOM from 'react-dom/client';
// import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";
// import Todos from "./Todos";
// import Car from './Car.js';


// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState(["todo 1", "todo 2"]);
//   const incrment = () => {
//     setCount((c) => c+1);
//   };

//   return(
//     <>
//       {/* <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="blogs" element={<Blogs />} />
//             <Route path="contact" element={<Contact />} />
//             <Route path="*" element={<NoPage />}/>
//           </Route>
//         </Routes>
//       </BrowserRouter> */}
//       <Todos todos={todos} />
//       <hr />
//       <div>
//         Count : {count}
//         <button onClick={incrment}>+</button>
//       </div>
//     </>
//   );
// };

// function MyForm(){
//   const [myCar, setMyCar] = useState("Volvo");
//   const handleChange = (event) => {
//     setMyCar(event.target.value)
//   }
//   return(
//     <form>
//       <select value={myCar} onChange={handleChange}>
//         <option value="Ford">Ford</option>
//         <option value="Audi">Volvo</option>
//         <option value="Mercedes">Fiat</option>
//       </select>
//     </form>
//   )
// }
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


// const Header = () => {
//   const myStyle = {
//     color: "cyan",
//     backgroundColor: "#212121",
//     padding: "10px"
//   };
//   return (
//     <>
//       <h1 style={myStyle}> Inline Styling </h1>
//       <p>Red color!</p>
//     </>
//   )
// }

// const x = 11;
// let text = "Goodbye"
// if(x < 10){
//   text = "If condition!";
// }
// const myElement = <h1>{text}</h1>

// function Car(props){
//   return <h2>{props.color} Car!</h2>
// }

// function Garage(){
//   return(
//     <>
//       <h1>What's in my Garage?</h1>
//       <Car color="Black" />
//     </>)
// }

// class Car extends React.Component {
//   constructor(props){
//      super(props);
//      this.state = {
//         brand:"Ford",
//         model: "Mustang",
//         color: "blue",
//         year: 2010
//      };
//   }
//   changeColor = () => {
//     this.setState({color: "red"});
//   }
//   render(){
//     return(
//       <div>
//         <h1>Car Company: {this.state.brand}</h1>
//         <p>
//           It is a {this.state.color} {this.state.model}
//           from {this.state.year}.
//         </p>
//         <button type='button' onClick={this.changeColor}>
//           Change Color
//         </button>
//       </div>
//     )
//   }
// }

// function Car(props){
//   return <h2>Brand Name:{props.brand}!</h2>
// }

function Click(){
  const mouse = (a, b) => {
    alert(b.type);
  }
  return(
    <button onClick={(event) => mouse("Nice Click!", event)}>Click Here</button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Click/>)