// import React, { useEffect, useState } from 'react'
import React, { useState, useEffect, useContext } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';

import { adddata, deldata } from './context/ContextProvider';
import { updatedata } from './context/ContextProvider';


const Home = () => {

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const { udata, setUdata } = useContext(adddata);
    const { updata, setUPdata } = useContext(updatedata);
    const { dltdata, setDLTdata } = useContext(deldata);

    const getdata = async (e) => {


        const res = await fetch("/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 404 || !data) {
            console.log("error");
        } else {
            setUserdata(data)
            console.log("get data");
        }

    }
    useEffect(() => {           // useEffect kya karega jabadhi hamara page reload hoga getdata function ko call karega
        getdata();
    }, [])


    const deleteuser = async (id) => {

        const res2 = await fetch('/deleteuser/' + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            alert("error")
            console.log("error");


        } else {
            console.log("user delete successfully");
            alert("user delete successfully");
            setDLTdata(deletedata)
            getdata();
        }
    }

    return (

        <>

            {
                udata ?
                    <>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{udata.name}</strong>  added succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }

            {
                updata ?
                    <>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{updata.name}</strong>  updated succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }

            {
                dltdata ?
                    <>
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>{dltdata.name}</strong>  deleted succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }


            <div className='mt-4'>
                <div className='container'>
                    <div className='add_btn mt-2 mb-2'>
                        <NavLink to="/register" className=' btn btn-primary'>+ Add data</NavLink>

                    </div>
                    <table className="table">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">Id</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Re_Password</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Address</th>
                                <th scope="col"></th>


                            </tr>
                        </thead>
                        <tbody>

                            {

                                getuserdata.map((element, id) => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row"> {id + 1} </th>
                                                <td> {element.name} </td>
                                                <td> {element.email} </td>
                                                <td> {element.password} </td>
                                                <td> {element.confirm_password} </td>
                                                <td> {element.dob} </td>
                                                <td> {element.contact} </td>
                                                <td> {element.add} </td>
                                                <td className='d-flex justify-content-between'>
                                                    <NavLink to={'edit/' + element._id}><button className='btn btn-primary mx-2'><CreateIcon /></button></NavLink>
                                                    <button className='btn btn-danger' onClick={() => deleteuser(element._id)}><DeleteOutlineIcon /></button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div >


        </>

    )
}

export default Home
