import React, { useEffect, useState } from "react";
import "../styles/register.css"
import Header from "./Header";

function Register()
{
    let [reg_data,updateData]=useState({
        name:"",
        email:"",
        phone:"",
        profession:"",
        password:""
    })
    let [conf_password,checkPassword]=useState('')

    
    async function submitForm(e)
    {
        e.preventDefault();
        // let data=new FormData(e.target)
        // console.log(data);
        if(reg_data.password===conf_password)
        {
            console.log(reg_data);
            // console.log(data);
        }
        else
        {
            console.log("password is not match");
        }
          
        //sending data to backend

        await fetch("http://localhost:8000/register",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(reg_data),
        })
        .then((data)=>data.json())
        .then((responce)=>console.log(responce))
        .catch(()=>console.log("uploading error"))

        updateData({
            name:"",
            email:"",
            phone:"",
            profession:"",
            password:""
        })
        
    }

    function change(e,propName)
    {
        updateData((data)=>({
            ...data,
            [propName]:e.target.value
        }))
    }

    return <>
        <div className="grandParent">
            <div className="p1">
                <div className="sub_p1">
                    <h1>Welcome Page</h1>
                    <h1 className="h1">One line text <br></br> Will be here</h1>
                    <p className="para1">Sign in to continue access pages</p>
                    <p className="para2">Already Have An Account</p>
                    <form action="#" method="post">
                        <button className="signin_btn">Sign In</button>
                    </form>
                </div>
            </div>
            <div className="p2">
                <div className="sub_p2">
                    <div className="child_p2">
                        <h1 className="register">Register</h1>
                        <p className="para3">Register to continue access pages</p>
                        <form className="form" action="#" method="POST" onSubmit={(e)=>submitForm(e)}>
                            <div className="form_1">
                                <div>
                                    <label For="name">Name</label><br />
                                    <input type="text" id="name" name="name" value={reg_data.name} onChange={(e)=>change(e,'name')}/>
                                    <hr className="hr"/>
                                </div>
                                <div>
                                    <label For="phone">Phone</label><br />
                                    <input type="number" id="phone" name="phone"   value={reg_data.phone} onChange={(e)=>change(e,'phone')}/>
                                    <hr  className="hr"/>
                                </div>
                                <div>
                                    <label For="password">Password</label><br />
                                    <input type="password" id="password" name="password" value={reg_data.password} onChange={(e)=>change(e,'password')}/>
                                    <hr  className="hr" />
                                </div>
                            </div>
                            <div className="form_2">
                                <div>
                                    <label For="email">Email</label><br />
                                    <input type="email" id="email" name="email" value={reg_data.email} onChange={(e)=>change(e,'email')}/>
                                    <hr  className="hr"/>
                                </div>
                                <div>
                                    <label For="profession">Profession</label><br />
                                    <input type="text" id="profession" name="profession" value={reg_data.profession} onChange={(e)=>change(e,'profession')}/>
                                    <hr  className="hr"/>
                                </div>
                                <div>
                                    <label For="c_password">Confirm Password</label><br />
                                    <input type="password" id="c_password" name="c_password" value={conf_password} onChange={(e)=>checkPassword(e.target.value)}/>
                                    <hr  className="hr" />
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""   id="invalidCheck" style={{width:"13px",height:"13px"}} required />
                                        <label className="form-check-label" for="invalidCheck">
                                        <p style={{fontSize:"10px"}}>I agree to Terms & Condition receiving marketing and promotional materials</p>
                                        </label>
                                        {/* <div className="invalid-feedback">
                                        You must agree before submitting.
                                        </div> */}
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="register_btn" style={{position:"relative",right:"80px"}}>Register</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Register;