import React from "react";
import './EditCourse.scss';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Coursestart } from "../Courseredux";
import { Courseaction } from "../Courseredux";
import { useEffect } from "react";
const EditCourse = (props) => {

    const [check23, setcheck23] = useState([])

    const dispatch = useDispatch()

    const [AddCourse1, setAddCourse1] = useState({
        id: ''
    })
    const [AddCourse2, setAddCourse2] = useState({
        name: ''
    })
    const [AddCourse3, setAddCourse3] = useState({
        teacher: ''
    })
    const [AddCourse4, setAddCourse4] = useState({
        courseName: ''
    })


    const editapi = useSelector(Coursestart).information
    console.log('thin hihi',);

    useEffect(() => {
        for (var i = 0; i < editapi.length; i++) {
            if (props.id == editapi[i].id) {

                setAddCourse2({ name: editapi[i].name });
                setAddCourse3({ teacher: editapi[i].teacher });
                setAddCourse4({ courseName: editapi[i].courseName })

            }
        }
    }, [])

    const editcourse2 = (e) => {
        setAddCourse2({ ...AddCourse2, [e.target.name]: [e.target.value] });
    }
    const editcourse3 = (e) => {
        setAddCourse3({ ...AddCourse3, [e.target.name]: [e.target.value] });
    }
    const editcourse4 = (e) => {
        setAddCourse4({ ...AddCourse4, [e.target.name]: [e.target.value] });
    }
    const saveeditcourse = () => {
        dispatch(Courseaction.editcourse({
            id: props.id,
            name: AddCourse2.name,
            teacher: AddCourse3.teacher,
            courseName: AddCourse4.courseName
        }))
    }

    return (

        <div className="editCourse">
            {editapi.map((value, index) =>

                <div key={index}>

                    {props.id == value.id ? (


                        <table key={index}>

                            <tr>
                                <td><label>name</label></td>
                                <td>  <input name='name' value={AddCourse2.name} placeholder={value.name} onChange={editcourse2} type='text' /></td>
                            </tr>
                            <tr>
                                <td> <label>name teacher</label></td>
                                <td>  <input name="teacher" placeholder={value.teacher} onChange={editcourse3} value={AddCourse3.teacher} type='text' /></td>
                            </tr>
                            <tr>
                                <td>  <label>courseName</label></td>
                                <td>  <input name="courseName" placeholder={value.courseName} onChange={editcourse4} value={AddCourse4.courseName} type='text' /></td>
                            </tr>



                        </table>
                    ) : (null)}
                </div>


            )}



            <button onClick={saveeditcourse}>save</button>
        </div>
    )
}
export default EditCourse;