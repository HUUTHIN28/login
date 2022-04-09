import React from "react";
import Courseapi from "../../apiAxios/Courseapi";
import './Course.scss'
import { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { AiFillFolderAdd } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import EditCourse from "./editCourse/EditCourse";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Courseaction, Coursestart } from "./Courseredux";
import { confirmAlert } from 'react-confirm-alert';

const Course = () => {
    const [check, setcheck] = useState([]);
    const [idd, setidd] = useState({ id: '' });
    const [show, setshow] = useState({ show: false })
    const [saveid, setsaveid] = useState({ id: '' });


    const dispatch = useDispatch();

    const deletet = (id) => {

        setsaveid({ ...saveid, id: id });

        setshow({ ...show, show: true })
    }
    const apiCoursesta = useSelector(Coursestart).information
    useEffect(() => {
        dispatch(Courseaction.loadding())
    }, [useSelector(Coursestart).load]);



    const canel = () => {
        setshow({ ...show, show: false })
    }
    const yes = () => {
        dispatch(Courseaction.deletecourse({
            ID: saveid.id,

        }))
        setshow({ ...show, show: false })
    }


    const editshow = useSelector(Coursestart).show;
    const edit = (e) => {

        idd.id = e;
        setidd({ ...idd });

        dispatch(Courseaction.editshow())

    }
    const editttt = () => {
        dispatch(Courseaction.editshowfalse())
    }

    return (
        <div className="Course">
            <p>tổng số khóa học :43</p>
            <a href="/khoahoc/addCourse"><AiFillFolderAdd className="icon" /></a>
            <div className="Course_heder">
                <p>STT</p>
                <p>tên giáo viên</p>
                <p>tên học sinh</p>
                <p> tên khóa học</p>
                <p> edit</p>
            </div>

            {apiCoursesta.map((valll, index) =>
                <div className="Course_heder " key={index} >
                    <p>{valll.id}</p>
                    <p>{valll.teacher}</p>
                    <p>{valll.name}</p>
                    <p> {valll.courseName}</p>
                    <p>
                        <AiFillDelete onClick={() => deletet(valll.id)} />
                        <AiFillEdit onClick={() => edit(valll.id)} />


                    </p>
                </div>
            )}
            {show.show ? (<>
                <div className="deletecourse">

                    <p> bạn có thật sự muốn xóa khóa học này ?</p>
                    <button onClick={yes}>có</button> <button onClick={canel}>không</button>  </div> <div className="deletecoursechier"></div>
            </>) : (null)}

            {editshow ? (<> <div className="editt" onClick={editttt}> </div> <EditCourse id={idd.id} />  </>) : (null)}

        </div>
    )
}
export default Course;