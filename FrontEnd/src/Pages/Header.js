import React, { useState } from 'react'
import Cookies from'universal-cookie'
import '../styles/header.css'
import '../styles/addQuiz.css'
import { useNavigate } from 'react-router-dom'
//import home from '../../public/images/home-run (1).svg'

export default function Header(){
    const cookies=new Cookies()
    const navigate=useNavigate();

    const [toggle, setToggle] = useState(false);

    function signout()
    {
        let token=cookies.get("uid")
        if(token)
        {
            window.location.reload(true)
            cookies.remove("uid")
            navigate('/')
        }
        else{
            window.location.reload(true)
            navigate('/')
        }
    }

    return<>
        
            <header className='top-header'>
                <div id='surveyheader'>
                    <section className='logo'>Logo</section>
                    <section id='profile'>
                        <div id="profilepic"></div>
                        <div onClick={()=>{setToggle(prevToggle=>!prevToggle)}} className='dropdown'></div>
                    </section>
                </div>
                
                    <div className={`float_box margin ${(toggle)? "active":'inactive'}`} margin>
                        <div>

                            
                                <div>
                                    <button  id="signout-btn" onClick={signout}>SignOut</button>
                                </div>
                            
                        </div>
                        

                    </div>
                
            </header>
    </>
}