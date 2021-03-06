// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react"
import Navigation from "./components/Navigation"
import Travel from "./components/Travel"
import data from "./data"

export default function App(){
    const cards = data.map((item) => {
        return(
            <Travel 
              key={item.title}
              item={item}  
            />
        )
    })
    
    
    return(
        <>
            <Navigation />
            {cards}
            {cards}
            {cards}
        </>
    )
}
