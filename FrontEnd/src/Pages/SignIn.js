import React,{useState} from "react";
import "../styles/signIn.css"
import Cookies from'universal-cookie'
import jwt from 'jwt-decode'
import { useNavigate } from "react-router-dom";
import backEndUrl from '../config/config'

function SignIn()
{
    // window.location.reload(true)

    const cookies=new Cookies()

    const navigate = useNavigate()

    let [invalid,update]=useState(false)
    let [notReg,showReg]=useState(false)
    let [enterDetail,showDetalAlert]=useState(false)

    let [signIn_data,updateData]=useState({
        email:"",
        password:""
    })
    
    async function submitForm(e)
    {
        e.preventDefault();
        console.log(signIn_data);

        // sendind data to backend........
        if(cookies.get("uid"))
        {
            navigate('list-survey')
        }
        else{
        await fetch(`https://survey-backend-cp5k.onrender.com/login`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(signIn_data),
        })
        .then((data)=>data.json())
        .then((responce)=>{
            console.log(responce)
            if(responce==='incorrect password')
            {
                update(true)
                navigate('/')
            }
            else if(responce==='not registered')
            {
                showReg(true)
                setTimeout(()=>{
                    navigate('register')
                },2000)
               
            }
            else if(signIn_data.email==="" && signIn_data.password==="")
            {
                showDetalAlert(true)
                navigate('/')
            }
            else
            {
                showReg(false)
                cookies.set("uid",responce,{
                    expires:new Date(Date.now()+90 * 24*60*60*1000),
    
                })
                navigate('list-survey')
            }
            // cookies.set("uid",responce,{
            //     expires:new Date(Date.now()+90 * 24*60*60*1000),

            // })
            // localStorage.setItem('token', responce); 
        })
        .catch(()=>console.log("uploading error"))

        updateData({
            email:"",
            password:""
        })

        let token=cookies.get("uid")
        if(token)
        {
            // navigate("list-survey")
            
        }
        else
        {
            navigate('/')
        }

        

    }
} 

    function onChange(e,prop)
    {
        updateData((data)=>({
            ...data,
            [prop]:e.target.value
        }))
    }

    // const navigate = useNavigate()
    return <>
         {/* <h2 className="invalid">invalid details</h2> */}
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
                    <form action="#" method="post">
                        <button onClick={()=>{
                            navigate('register')
                        }} className="register_btn">Register</button>
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
                                <button onClick={
                                    // navigate("list-survey")
                                    submitForm
                                } type="Submit" className="signin_btn" >Sign in</button>
                                {invalid && <h2 className="invalid">invalid password</h2>}  
                                {notReg && <h2 className="invalid">user not registered</h2>} 
                                {enterDetail && <h2 className="invalid">please enter the details</h2>} 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SignIn