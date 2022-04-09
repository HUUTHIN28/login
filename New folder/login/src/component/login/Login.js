import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { loginaction, namelogin } from "./loginredux";
import { useState } from "react";
import './Login.scss';

const Login = () => {
    const [pass, setpass] = useState({
        name: '',

    })

    const [pass1, setpass1] = useState({
        password: '',

    })
    const name = useSelector(namelogin);
    const dispatch = useDispatch();
    console.log('name', name)

    const check = () => {
        dispatch(loginaction.login({
            name: pass.name,
            password: pass1.password
        }))
    }
    const check1 = (e) => {
        pass.name = e.target.value;
        setpass({ ...pass })
        console.log('check1',pass.name)
    }
    const check2 = (e) => {
        pass1.password = e.target.value;
        setpass1({ ...pass1 })
        console.log('check2',pass1.password)
    }

    return (
        <div className="login2">
        <div className="login1">

          <div>
            <label  >Tài khoản :</label>
            <input type='text' onChange={check1} /> <br />
            <label  >Mật khẩu :</label>
            <input type='text' onChange={check2} /> <br />
      
          {name.mess} <br/>
            <button onClick={check}>login</button> <br/>
            <a href="/registration">đăng ký </a>
        </div>
        </div>
        </div>
    )
}
export default Login