import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginaction } from "../login/loginredux";
import './Narbar.scss';
import React from "react";

const Narbar = () => {
    const isAuthenticated = Boolean(localStorage.getItem('token'))
    const dispatch = useDispatch();
    const check1 = () =>{
        dispatch(loginaction.logout({
      
        }))
    }
    return (
        <div className="Narbar">
            <div>
            <a href="/"><b>Trang chu</b></a>
            <a href="/home"><b>Home</b></a>
            <a href="/khoahoc"><b> khóa học</b></a>
            </div>
            <div>
                {isAuthenticated?(<a className="login" href="/login"><b> login</b></a>):(   <b className="login" onClick={check1}> logOut </b>)}
        
            </div>
        </div>
    );
}
export default Narbar;