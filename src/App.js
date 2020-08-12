import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './Components/Form/Form';
import TableDetails from './Components/Table/Table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
         <span className="police-dept">Police Department Berlin</span>
         <React.Fragment>
         <Form/>
         <TableDetails/>
         </React.Fragment>
      </header>
     
    </div>
  );
}

export default App;
