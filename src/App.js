import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Pages/Home/Banner/Banner';
import LogIn from './Pages/LogIn/LogIn';
import Register from './Pages/Register/Register';
import Header from './Sheared/Header/Header'
function App() {
  return (
    <div  >
      <Header></Header>
      <Routes>
        <Route path='/log-in' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
