import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/contacts" element={<Contacts></Contacts>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
