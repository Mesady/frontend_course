import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Lofi from './pages/lofi';
import Phonk from './pages/phonk';
import 'bootstrap/dist/css/bootstrap.min.css';
import { checkToken } from './api/checkTokenApi';
import AuthContext from './components/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Authpage from './pages/authpage';

function App() {
  const [isAuth, setAuth] = React.useState<boolean>(false);
  React.useEffect(()=>{
    checkToken(setAuth)
  }, [])
  return (
    <AuthContext.Provider value={{isAuth, setAuth}}>
    <div className="App">
      <Routes>
        <Route path={'/'} element={ <Home /> } />
        <Route path={'/lofi'} element={ <Lofi/> } />
        <Route path={'/phonk'} element={ <Phonk/> } />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/signup'} element={<Signup />} />
        <Route path={'/authpage'} element={<Authpage />} />
      </Routes>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
