import logo from './logo.svg';
import './App.css';
import { Button } from '@chakra-ui/react';
import { Routes,Route } from 'react-router-dom';
import Homepage from './HomePage/Homepage';
import Auth from './Auth/Auth';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/auth' element={<Auth/>}/>


      </Routes>
    </>
  );
}

export default App;
