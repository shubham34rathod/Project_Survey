import React from "react";
import "../styles/register.css"

function Register()
{
    return <>
        <div className="grandParent">
            <div className="p1">
                <div className="sub_p1">
                    <h1>Welcome Page</h1>
                    <h1 className="h1">One line text <br></br> Will be here</h1>
                    <p className="para1">Sign in to continue access pages</p>
                    <p className="para2">Already Have An Account</p>
                    <form action="#" method="post">
                        <button>Sign In</button>
                    </form>
                </div>
            </div>
            <div className="p2">
                <div className="sub_p2">
                    <div className="child_p2">
                        <h1 className="register">Register</h1>
                        <p className="para3">Register to continue access pages</p>
                        <form className="form" action="#" method="post">
                            <div className="form_1">
                                <div>
                                    <label For="name">Name</label><br />
                                    <input type="text" id="name" name="name" />
                                    <hr className="hr"/>
                                </div>
                                <div>
                                    <label For="phone">Phone</label><br />
                                    <input type="number" id="phone" name="phone" />
                                    <hr  className="hr"/>
                                </div>
                                <div>
                                    <label For="password">Password</label><br />
                                    <input type="password" id="password" name="password" />
                                    <hr  className="hr" />
                                </div>
                            </div>
                            <div className="form_2">
                                <div>
                                    <label For="email">Email</label><br />
                                    <input type="email" id="email" name="email" />
                                    <hr  className="hr"/>
                                </div>
                                <div>
                                    <label For="profession">Profession</label><br />
                                    <input type="text" id="profession" name="profession" />
                                    <hr  className="hr"/>
                                </div>
                                <div>
                                    <label For="c_password">Confirm Password</label><br />
                                    <input type="password" id="c_password" name="c_password" />
                                    <hr  className="hr" />
                                </div>
                                <div class="col-12">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value=""   id="invalidCheck" style={{width:"13px",height:"13px"}} required />
                                        <label class="form-check-label" for="invalidCheck">
                                        <p style={{fontSize:"10px"}}>I agree to Terms & Condition receiving marketing and promotional materials</p>
                                        </label>
                                        <div class="invalid-feedback">
                                        You must agree before submitting.
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" style={{position:"relative",right:"80px"}}>Register</button>
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