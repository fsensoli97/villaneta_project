import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/villaneta_project/" element={<Home></Home>}></Route>
          <Route path="/villaneta_project/contacts" element={<Contacts></Contacts>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
