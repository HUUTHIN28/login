import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { loginaction, namelogin } from "../login/loginredux";

const Home = () =>{
    const dispatch = useDispatch();

    const check1 = () =>{
        dispatch(loginaction.logout({
      
        }))
    }
    const name = useSelector(namelogin)
    console.log('hihaisha',name.loggedIn);
    return(
        <>
        <p> home</p>
        <button onClick={check1}> logOut</button> <br/>
         tên học sinh : {name.name} <br/>
         mật khẩu : {name.password} <br/>
        {name.isisLoggedIn?(<div>hihi</div>):(<div>haha</div>)}
        </>
    )
}
export default Home