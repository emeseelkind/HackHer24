import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppTitle from './AppTitle';
import TitlePage from './components/TitlePage';


function App() {
  const [showposts, setShowPosts] = useState(true);
  const [username, setUsername] = useState(null);
  const setUser=(name)=>{
    setUsername(name)
  }

  return (
    <BrowserRouter>
      <UserData setUser={setUser}/>
      <Routes>

        <Route path="/" element={<TitlePage username={username}/>} />
        
        
        <Route path="/about-us" element={<AboutUs />} username={username}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;