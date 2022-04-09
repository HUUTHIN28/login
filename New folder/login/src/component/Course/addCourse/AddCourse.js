import React from "react";
import './AddCourse.scss';
import { useState } from "react";
import Courseapi from "../../../apiAxios/Courseapi";
import { useDispatch } from "react-redux";
import { Courseaction } from "../Courseredux";
const AddCourse = () => {

    const [AddCourse, setAddCourse] = useState({
        id: '', name: '', teacher: '', courseName: ''
    })
   







    const dispatch = useDispatch();
    const check = (e) => {
        setAddCourse({ ...AddCourse, [e.target.name]: [e.target.value] })
     

    }
    const addsave = () => {
        // Courseapi.Posttop(AddCourse);
        dispatch(Courseaction.coursert({
            id:AddCourse.id,
            name:AddCourse.name,
            teacher:AddCourse.teacher,
            courseName:AddCourse.courseName,
        }))
    }
    return (
        <div className="AddCourse">




            <table>
                <tr>
                    <td> <label>id</label></td>
                    <td>  <input name='id'   onChange={check} type='number'  /></td>
                </tr>
                <tr>
                    <td><label>name</label></td>
                    <td>  <input name='name' onChange={check} type='text' /></td>
                </tr>
                <tr>
                    <td> <label>name teacher</label></td>
                    <td>  <input name="teacher" onChange={check} type='text' /></td>
                </tr>
                <tr>
                    <td>  <label>courseName</label></td>
                    <td>  <input name="courseName" onChange={check} type='text' /></td>
                </tr>
            </table>
            <button onClick={addsave}>save</button>




        </div>
    )
}
export default AddCourse;