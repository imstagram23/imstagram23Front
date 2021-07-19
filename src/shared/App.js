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

// 리액트 페이지 옮겨 다닐땐 react-router-dom써서 history.push요런걸로 이동했음
// 그런데 history객체는 Route로 엮어줘야 쓸 수 있었음. 즉 컴포넌트에만 있어서
// App.js에서 라우트 통해 프롭스로 받아다가 쓰는거니까 컴포넌트만 사용가능
// 그러니까 리덕스에서 못쓰는 상태가 되고 window.location.href는 페이지가 재런더링 되면서
// 리덕스에 있는 데이터 다 날아감
// 따라서 컴포넌트끼리만 가지고 있던 history를 리덕스에서도 쓸 수 있게끔 해줘야함
// history@4.10.1 connected-react-router@6.8.0 패키지 설치
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