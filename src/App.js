import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Jobs from './components/jobs';
import Network from './components/Networking';
import Notification from './components/Notification';
import { useState } from 'react';



function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  // 🟡 added loading state
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(userAuth => {
    if (userAuth) {
      dispatch(
        login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        })
      );
    } else {
      dispatch(logout());
    }
    setLoading(false); // 🟡 added this line
  });
  return unsubscribe; // 🟡 cleanup listener
}, [dispatch]);

if (loading) {
  return <div className="loading">Loading...</div>; // 🟡 new loading fallback
}

  return (
    <div className="app">
      <Router>
      <Header />
        <Switch>
          

          <Route path="/login">
            {user ? <Redirect to="/" /> : <Login />}
          </Route>

          <Route path="/jobs">
          <Jobs />
          </Route>

          <Route path="/network">
           <Network />
          </Route>

          <Route path="/notifications">
            <Notification />
          </Route>

          <Route exact path="/">
            {!user ? (
              <Redirect to="/login" />
            ) : (
              <div className="app__body">
                <Sidebar />
                <Feed />
                <Widgets />
              </div>
            )}
          </Route>

          {/* Catch-all fallback */}
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
