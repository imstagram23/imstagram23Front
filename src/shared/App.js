import React, { useEffect } from "react";

import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

import NotFound from "./NotFound";
import PostList from "../pages/PostList";
import PostWrite from "../pages/PostWrite";
import PostEdit from "../pages/PostEdit";

function App() {


  return (
    <React.Fragment>
      
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route exact path="/write" component={PostWrite} />
          <Route exact path="/edit" component={PostEdit} />
          <Route render={(props) => (<NotFound history={props.history}/>)} />
        </Switch>

    </React.Fragment>
  );
}

export default App;