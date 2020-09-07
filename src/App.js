import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import Post from './Components/Post/Post';
import Comment from './Components/Comment/Comment';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/timeline/:userId">
          <Post/>
        </Route>
        <Route path="/viewPost/:postId">
          <Comment/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
