import React, { useState } from 'react'
import '../styles/header.css'
import '../styles/addQuiz.css'
//import home from '../../public/images/home-run (1).svg'

export default function Header(){
    const [toggle, setToggle] = useState(false);

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
                                    <button  id="signout-btn">SignOut</button>
                                </div>
                            
                        </div>
                        

                    </div>
                
            </header>
    </>
}