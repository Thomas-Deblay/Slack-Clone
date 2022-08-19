import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Chat from './Chat';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    //BAM Naming Convention

    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Routes>
                <Route path="/room/:roomId" element={<Chat />} />
                <Route path="/" element={<About />} />
              </Routes>
              {/* React-Router --> Screenchat */}
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
