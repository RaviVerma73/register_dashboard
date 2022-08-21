import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { updatedata } from './context/ContextProvider'


const Edit = () => {

  const {updata, setUPdata} = useContext(updatedata)


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

    const {id} = useParams("");
    console.log(id);
    
    const getdata =async() =>{
      const res =await fetch('/getuser/'+id,{
        method:"GET",
        headers:{
          "Content-Type": "application/json"
        }
      });

      const data = await res.json();
      console.log(data);

      if(res.status === 422 || !data){
        console.log("error");
      } else{
        setINP(data)
        console.log("get data");
      }
    }

    useEffect(() => {
      getdata();
    },[]);

const updateuser = async(e)=>{
    e.preventDefault();

    const {name,email,password,confirm_password,dob,contact,add} = inpval;

    const res2 = await fetch('/updateuser/'+id ,{
      method:"PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        name,email,password,confirm_password,dob,contact,add
      })
    });

    const data2 = await res2.json();
    console.log(data2);

    if(res2.states === 422 || !data2){
      alert("fill the data");
    }else{
      alert("data update successfully")
      navigate("/")
      setUPdata(data2);
    }
}


  return (
    
        <div className='container'>
      
      <form className='mt-4'>
        <div className='row'>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label  className="form-label">Name</label>
            <input type="text" name="name" onChange={satdata} value={inpval.name}   className="form-control"  aria-describedby="emailHelp" />
            
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label  className="form-label">Email</label>
            <input type="email" name="email" onChange={satdata} value={inpval.email}  className="form-control"  />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label  className="form-label">Password</label>
            <input type="password" name='password' onChange={satdata} value={inpval.password}  className="form-control"  />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label  className="form-label">Confirm Password</label>
            <input type="password" name='confirm_password' onChange={satdata} value={inpval.confirm_password}  className="form-control"  />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label  className="form-label">DOB</label>
            <input type="text" name='dob' onChange={satdata} value={inpval.dob}  className="form-control"  />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label  className="form-label">Contact</label>
            <input type="mobile" name="contact" onChange={satdata} value={inpval.contact}   className="form-control"  />
          </div>
         
          <div className="mb-3 col-lg-12 col-md-12 col-12">
            <label  className="form-label">Address</label>
            <textarea name="add"  onChange={satdata} value={inpval.add}  className="form-control" rows='8' cols="30"></textarea>
          </div>
          <button type="submit" onClick={updateuser} className="btn btn-primary">Submit</button>
        </div>
      </form >
    </div >
   
  )
}

export default Edit
