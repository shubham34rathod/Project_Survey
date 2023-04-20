import React, { useState } from "react";
import "../styles/signIn.css"

function SignIn()
{
    let [signIn_data,updateData]=useState({
        email:"",
        password:""
    })
    
    function submitForm(e)
    {
        e.preventDefault();
        console.log(signIn_data);
        updateData({
            email:"",
            password:""
        })
    }

    function onChange(e,prop)
    {
        updateData((data)=>({
            ...data,
            [prop]:e.target.value
        }))
    }

    return <>
        <div className="box">
            {/* <div id="tmp"></div> */}
            <div className="parent1">
                <div className="sub-box-1">
                    <div id="h1-box">
                        <h1>Welcome Page</h1>
                        <h1>One line text <br></br> Will be here</h1>
                    </div>
                    <p id="l1">Sign in to continue access pages</p>
                    <p id="l2">Don’t Have An Account?</p>
                    <form action="#" method="post" className="form-reg">
                        <button className="register_btn">Register</button>
                    </form>
                </div>
            </div>
            <div className="parent2">
                <div className="child1">
                    <div className="sub-box-2">
                        <h1 id="h1">Sign In</h1>
                        <p id="l3">Sign in to continue access pages</p>
                        <form action="#" method="POST" className="form2" onSubmit={(e)=>submitForm(e)}>
                            <div>
                                <label for="email">Email</label><br />
                                <input type="email" id="email" name="email" value={signIn_data.email} onChange={(e)=>onChange(e,"email")}/>
                                <hr style={{marginTop:"0px"}}/>
                            </div>
                            <div>
                                <label for="password">Password</label><br />
                                <input type="password" id="password" name="password" value={signIn_data.password} onChange={(e)=>onChange(e,"password")}/>
                                <hr style={{marginTop:"0px"}}/>
                            </div>
                            <div>
                                <button type="Submit" className="signin_btn" >Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SignIn