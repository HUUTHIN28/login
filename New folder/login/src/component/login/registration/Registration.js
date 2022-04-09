import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Registrationreduxaction, stareRegistr } from "./Registrationredux";
import './Registration.scss'
import { useState } from "react";



const Registration = () => {

    const [pass, setpass] = useState({
        name: '', password1: '', password2: ''

    })
    const error = useSelector(stareRegistr)


    const dispatch = useDispatch();
    const check = () => {
        dispatch(Registrationreduxaction.Registrationhhh({
            name: pass.name,
            password: pass.password1,
            password1: pass.password2
        }))
    }
    const check1 = (e) => {
        setpass({ ...pass, [e.target.name]: e.target.value })
        console.log('check', pass.name)


    }

    return (
        <div className="Registration">
            <table>
                <tr>
                    <td>  <label>tài khoản :</label></td>
                    <td>    <input type='text' name="name" onChange={check1} />

                    </td>
                    <td>

                        {/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(pass.name) || pass.name == '' ? (null) : (<p className="error">mail không đung</p>)}
                    </td>
                </tr>


         

                <tr >
                    <td>    <label>mật khẩu :</label></td>
                    <td>    <input type='password' name="password1" onChange={check1} /></td>
                </tr>



                <tr>
                    <td>   <label> nhập lại mật khẩu :</label></td>
                    <td>   <input type='password' name="password2" onChange={check1} /></td>
                </tr>



            </table>
            {error.error}
            <br />

            <button onClick={check} >lưu</button>

        </div>
    );
}
export default Registration;