import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './Pages/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import Register from './Pages/Register/Register';
import Footer from './Sheared/Footer/Footer';
import Header from './Sheared/Header/Header'
import RequireAuth from './Sheared/RequireAuth/RequireAuth';
function App() {
  return (
    <div  >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/log-in' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
