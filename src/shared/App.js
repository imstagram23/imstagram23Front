import React, { useEffect } from "react";

import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Post from "../components/Post";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Mypost from "../pages/Mypost";

function App() {


  return (
    <React.Fragment>
        <BrowserRouter>
          <Route exact path="/" component={Post} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Mypost} />
        </BrowserRouter>

    </React.Fragment>
  );
}

export default App;