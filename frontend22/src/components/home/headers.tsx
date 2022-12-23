import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse'
import '../../css/home.css';
import 'bootstrap/js/dist/dropdown'
import React from 'react';
import authContext from '../AuthContext';
import { Link } from "react-router-dom";

const Header = () => {
    const isLogin = React.useContext(authContext);
    return (<header id="header" className="bg-black">
                <div className="container">
                    <nav className="navbar navbar-expand-md py-3 sticky-top">
                        <a data-bs-target="#shownavbar" data-bs-toggle="collapse" href="#" className="navbar-toggler"><i
                                className="navbar-toggler-icon"></i></a>
                        <div id="shownavbar" className="collapse navbar-collapse">
                            <ul className="navbar-nav ms-auto font-poppins">
                                <li className="nav-item text-blue"><a href="" className="nav-link">Старт</a></li>
                                <li className="nav-item"><a href="" className="nav-link">О сайте</a></li>
                                <li className="nav-item dropdown">
                                    <a href="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Блог</a>
                                    <ul className="dropdown-menu bg-black">
                                        <a href="#" className="dropdown-item text-white bg-black">Новости </a>
                                        <a href="#" className="dropdown-item text-white bg-black">Хех </a>
                                    </ul>
                                </li>
                                <li className="nav-item"><a href="" className="nav-link">Написать мне</a></li>
                                { !isLogin?.isAuth &&
                                <li className="navbar-item">
                                    <Link className="nav-link" to={'/login'}>Log in</Link>
                                </li>
                            }
                            { !isLogin?.isAuth &&
                                <li className="navbar-item">
                                    <Link className="nav-link" to={'/signup'}>Sign up</Link>
                                </li>
                            }
                            { isLogin?.isAuth &&
                                <li className="navbar-item">
                                    <Link className="nav-link" to='/login' onClick={
                                        ()=>{
                                            localStorage.clear()
                                            isLogin.setAuth(false)
                                        }
                                        }>Log out</Link>
                                </li>
                            }
                            { isLogin?.isAuth &&
                                <li className="navbar-item">
                                <Link className="nav-link" to={'/authpage'}>Kekwait</Link>
                            </li>
                            }
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>)
}
export default Header