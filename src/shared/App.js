import React, { useEffect } from "react";

import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Grid } from "../elements";

import Post from "../components/Post";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Mypost from "../pages/Mypost";

function App() {


  return (
    <React.Fragment>
      <Grid isRoot>
        <BrowserRouter>
          <Route exact path="/" component={Post} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Mypost} />
        </BrowserRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;