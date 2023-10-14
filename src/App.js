import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Location from './components/Location/Location';
import Contacts from './components/Contacts/Contacts';
import PreviousEditions from './components/PreviousEditions/PreviousEditions';
import Schedule from './components/Contacts/Schedule/Schedule';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import { createContext, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';

function App() {
  const [token, setToken] = useState(JSON.parse(sessionStorage.getItem("token")));

  useIdleTimer({
    timeout: 1000 * 60 * 15,
    onIdle: () => {
      sessionStorage.removeItem("token");
      setToken(false);
    }
  })

  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")));
  document.body.style.backgroundColor = darkMode ? "rgb(39, 39, 39)" : "white";

  return (
    <ThemeContext.Provider value={darkMode}>
      <BrowserRouter>
        <Routes>
          <Route path="/villaneta_project/" element={<Home></Home>}></Route>
          <Route path="/villaneta_project/location" element={<Location></Location>}></Route>
          <Route path="/villaneta_project/schedule" element={<Schedule></Schedule>}></Route>
          <Route path="/villaneta_project/gallery" element={<PreviousEditions></PreviousEditions>}></Route>
          <Route path="/villaneta_project/contacts" element={<Contacts></Contacts>}></Route>
          <Route path="/villaneta_project/community" element={<Login token={token} setToken={setToken}></Login>}></Route>
          <Route path="/villaneta_project/myprofile" element={<Profile token={token}></Profile>}></Route>
          <Route path="/villaneta_project/settings" element={<Settings setDarkMode={setDarkMode}></Settings>}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
export const ThemeContext = createContext();
