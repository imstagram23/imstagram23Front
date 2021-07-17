import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { history } from "../redux/configureStore";
import { ConnectedRouter } from "connected-react-router";

import NotFound from "./NotFound";
import PostList from "../pages/PostList";
import PostWrite from "../pages/PostWrite";
import PostEdit from "../pages/PostEdit";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Mypost from "../pages/Mypost";
import Comments from "../pages/Comments";



function App() {

  return (
    <React.Fragment>        
          <ConnectedRouter history={history}>
          <Switch>
          <Route exact path="/" component={PostList} />
          <Route exact path="/write" component={PostWrite} />
          <Route exact path="/edit" component={PostEdit} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Mypost} />
          <Route exact path="/comment" component={Comments} />
          <Route render={(props) => (<NotFound history={props.history}/>)} />

          </Switch>
          </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;