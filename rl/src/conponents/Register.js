// import React, { useState } from 'react'
import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { adddata } from './context/ContextProvider'



const Register = () => {
  
  const { udata, setUdata } = useContext(adddata);

  const navigate = useNavigate("");

      const[inpval,setINP] =useState({      // ----> const[currant value,updated value]
          name:"",
          email:"",
          password:"",
          confirm_password:"",
          dob:"",  
          contact:"",
          add:""
          
      })

      const satdata = (e) =>{
          console.log(e.target.value);
          const{name,value} =e.target;

          setINP((preval) => {
                return{
                  ...preval,
                  [name]:value
                }
          })
      }

      const addinpdata = async(e)=>{

        e.preventDefault();

        const {name,email,password,confirm_password,dob,contact,add} = inpval;


        const res = await fetch("/register",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            name,email,password,confirm_password,dob,contact,add
          })
        });

        const data = await res.json();
        console.log(data);

        if(res.status === 404 || !data){
          alert("Please fill the form");
          console.log("Please fill the form");
        }
        else{
          alert("data add successfully");
          console.log("data add successfully");
          navigate("/");
          setUdata(data)
        }

      }

  return (
    
    <div className='container mt-3'>
      <h2 style={{ fontWeight: 400 }}>Registration page</h2>
      <Card  sx={{ minWidth: 400 }}>
        <CardContent>
      <form className=' mt-4'>
        <div className='row'>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">Name</label>
            <input type="text" name="name" onChange={satdata} value={inpval.name}   className="form-control"  aria-describedby="emailHelp" />
            
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label  className="form-label">Email</label>
            <input type="email" name="email" onChange={satdata} required="required" value={inpval.email}  className="form-control"  />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label  className="form-label">Password</label>
            <input type="password" name='password'  onChange={satdata} value={inpval.password}  className="form-control"  />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label  className="form-label">Confirm Password</label>
            <input type="password" name='confirm_password' onChange={satdata} value={inpval.confirm_password}  className="form-control"  />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label  className="form-label">DOB</label>
            <input type="date" name='dob' onChange={satdata} value={inpval.dob}  className="form-control"  />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label  className="form-label">Contact</label>
            <input type="mobile" name="contact"  onChange={satdata} value={inpval.contact}   className="form-control"  />
          </div>
         
          <div className="mb-3 col-lg-12 col-md-12 col-12">
            <label  className="form-label">Address</label>
            <textarea name="add"  onChange={satdata} value={inpval.add}  className="form-control" rows='6' cols="30"></textarea>
          </div>
          <button type="submit" onClick={addinpdata} className="btn btn-primary">Register</button>
          <div id="emailHelp" className="form-text mt-4">Already Have an Account. <NavLink to="/login">Login</NavLink></div>
        </div>
      </form >
      </CardContent>
      </Card>
    </div >
  )
}

export default Register
