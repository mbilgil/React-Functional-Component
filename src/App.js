import React from 'react';
import { Container } from 'reactstrap';
// import FunctionBasedForm from './components/FunctionBasedForm'
import Counter from './components/Counter'
import './App.css'
import User from './components/User';
import Car from './components/Car';
import Message from './components/Message';
// import Five from './components/Five';

const App = () =>{
return(
  <div className="App">
    <img src="developer.png"  alt="alligator.io logo" width="150" />
    <Container>
      {/* <FunctionBasedForm />  */}
      <Counter/>
      <User/>
      <Car/>
      <Message/>
      {/* <Five/> */}
    </Container>
  </div>
)
};

export default App
