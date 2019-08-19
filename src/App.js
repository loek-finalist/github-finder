import React, { Component } from 'react';

import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello from react</h1>       
//     </div>
//   );
// }

class App extends Component {
  render() {

    let name = `Loek`;
    
    return (
      <div className="App">
        <h1>Hello from react!</h1>
        <h2>Your name: {name}</h2>
        <a href="https://loekvanvark.com/spacex-api/" target="_blank" label="loekvanvark {spaceX}">loek{`{spaceX}`}</a>
      </div>
    );
  }
}

export default App;
