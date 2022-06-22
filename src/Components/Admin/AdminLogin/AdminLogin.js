import React, { useState, useEffect, useRef } from 'react';
import './AdminLogin.css';
import logo from './logo.png';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FiEdit3 } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../../actions/admin.action';
import { useSelector } from 'react-redux';
import ToastHelper from '../../Helper/ToastHelper/ToastHelper';

function AdminLogin() {

    const navigate = useNavigate();
    const [Email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [showPassword, setShowPassWord] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [msgToast, setmsgToast] = useState("asdasd");
    const [bgToast, setbgToast] = useState("danger");
    const [idToast, setidToast] = useState(1);
    const delayToast = 3000;
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    
    const handleLogin = (e) => {
        e.preventDefault();
        const dataObj = {
            email: Email,
            password: password
        }
        dispatch(login(dataObj)).then(()=>{
            console.log('Login');
        }).catch(()=>{
            console.log('Error');
        })
    }
    const handlepassword = (e) => {
        setShowPassWord(true);
        setPassWord(e.target.value);
    }
    const fn = () => {
        return (<ToastHelper key={idToast} msg={msgToast} delay={delayToast} bg={bgToast} />);
    }
    return (
        <>
            <div className='navbar'>
                <div className="container">
                    <img className='m-2' src={logo} />
                    <p className='nav_logotext'>Shree Kalptaru</p>
                </div>
            </div>

            <div className='container no-main no-border pageview'>
                <div className='co-container mt-4'>
                    <p className='nav_logotext' id="title">Admin Login</p>
                    <div className='st-mobile mt-5'>
                        <label htmlFor='st-mob'>Email</label>
                        <br />
                        <div className='st-mob-sub'>
                            <input
                                type="text"
                                className='st-mob-input'
                                placeholder='Email'
                                value={Email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                id="st-mob"
                            />
                            <FiEdit3 className='st-mob-icon' />
                        </div>
                    </div>
                    <div className='st-mobile mt-2'>
                        <label htmlFor='st-pass'>Password</label>
                        <br />
                        <div className='st-mob-sub'>
                            <input
                                type={showPassword ? "text" : "password"}
                                className='st-mob-input'
                                placeholder='Password'
                                value={password}
                                onChange={handlepassword}
                                onFocus={() => { setShowPassWord(true) }}
                                onBlur={() => { setShowPassWord(false) }}
                                id="st-pass"
                            />
                            <FiEdit3 className='st-mob-icon' />
                        </div>
                    </div>
                    <div className='co-customer-share mt-4'>

                        <button className='co-share-btn' onClick={handleLogin}>
                            Log in
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default AdminLogin;