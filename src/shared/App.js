import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Signup from '../pages/Signup';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Route path="/signup" exact component={Signup}/>
      </BrowserRouter>
    </React.Fragment> 
  );
}

export default App;
