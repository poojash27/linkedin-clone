import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header />

      {/* If there is no user, render out Login Page. Otherwise render the app__body. */}
      {!user 
        ? <Login />
        : (<div className="app__body">
              <Sidebar />
              <Feed />
              {/* Widgets */}
           </div>)
      }
    </div>
  );
}

export default App;
