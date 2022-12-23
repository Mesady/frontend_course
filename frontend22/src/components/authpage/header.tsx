import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/lofi.css';
import 'bootstrap/js/dist/carousel'
import React from 'react';
import { Link } from "react-router-dom";
import Modal from '../modal';
import CreateRadio from '../addRadio';
import RadioData from '../../models/RadioData';


const Header = () => {
  const [form, setForm] = React.useState<boolean>(false)
  const switchForm = () =>{
    setForm(prev=>!prev)
}  
const [mustUpdate, setMustUpdate] = React.useState<boolean>(false)
const addRadio = (run: RadioData) =>{
  setMustUpdate(!mustUpdate)
}
    return (<nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">
                  <p>YourRadios</p>
                </a>
                <li className="navbar-item">
                   <button className="btn" onClick={switchForm}>Sign up</button>
                </li>
                {form && <Modal title="Add radio" onClose={switchForm}>
                <CreateRadio onAdd={addRadio} closeModal={switchForm}/>
                </Modal>}
              </div>
            </div>
          </nav>)
}
export default Header