import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import left_arrow from "../images/left-arrow.jpg"
import  settings from "../images/gear.jpg"
import '../styles/addQuiz.css'
import { useNavigate } from "react-router-dom";
import { Modal, ModalHeader } from 'reactstrap';
import Theme from "./Theme";
import close from '../images/close-_1_.jpg'

// import 'bootstrap/dist/css/bootstrap.css'


function AddQuiz()
{
    // let [tgl,tglChange]=useState(false)
    let [model,setModel]=useState(false)
    let [opacity,updateOpacity]=useState(5)
    let [show,change]=useState(false);
    // console.log(prop.style);
    function fn()
    {
        if(show===false)
        {
            change(true)
        }
        else
        {
             change(false)
        }
    }

    function toggle()
    {
        if(model===false)
        {
            setModel(true)
            updateOpacity(0.0)
        }
        else
        {
            setModel(false)
            updateOpacity(5)
        }
        
    }

    function PopUp()
    {
        return <>
           <Theme></Theme>
        </>
    }
   //opacity: 0.1;
    const navigate = useNavigate();
    return <>
        <Header></Header>
        <Sidebar></Sidebar>
        <div className="g_parent">
             <div style={{position:"fixed",bottom:"100px",left:"500px"}}>
                   {model && 
                        <div className="popup">
                           <PopUp></PopUp>
                        </div>
                    } 
             </div>       
            <div className="s_parent1">
                <div className="s_child1">
                    <div className="rec1">
                        <img onClick={()=>{
                            navigate('/list-survey/create')
                        }} src={left_arrow} alt="arrow" className="arrow lift" />
                        <p className="create">Create Questions</p>
                    </div>
                    <div className="rec2">
                        <button className="theme_btn" onClick={toggle}>Theme Setting</button>
                        <button onClick={()=>{
                            navigate('/list-survey/create/questions/preview')
                        }} className="preview">Preview</button>
                        <button onClick={()=>{
                            navigate('/list-survey/create/questions/preview')
                        }} className="save">Save</button>
                    </div>
                    
                </div>
            </div>
            <div className="s_parent2" style={{opacity:opacity}} >
                <div className="list">
                    <ul className="ul">
                        <li>Q.1</li>
                    </ul>
                </div>
                <div className="que">
                    <div>
                        <label for="que" style={{color:"#2D2D2E"}}>Question</label><br />
                        <input type="text" id="que" name="que" className="que_input" placeholder="Enter Question"/>
                    </div>
                    <div className="options">
                        <div className="que_box">
                            <input type="radio" name="option" id="option" />
                            {/* <label for="option" className="label">Option1</label> */}
                            <input type="text" className="label"/>
                        </div>
                        <div  className="que_box">
                            <input type="radio" name="option" id="option" />
                            {/* <label for="option" className="label">Option1</label> */}
                            <input type="text" className="label"/>

                        </div>
                        <div className="que_box">
                            <input type="radio" name="option" id="option" />
                            {/* <label for="option" className="label">Option1</label> */}
                            <input type="text" className="label"/>

                        </div>
                        <button className="add_que">Add question</button>
                    </div>                    
                </div>  
                <div className="s_parent3">
                    <img src={settings} alt="settings" className="settings" onClick={fn} />
                    {show && 
                <div className="float_box">
                    <div>
                        <img src={close} alt="close" className="close_tag" />
                        <p style={{fontSize:"12px",marginBottom:"5px"}}>Question Type</p>
                        <select className="select">
                            <option defaultChecked disabled>Select</option>
                            <option>Multiple Choice</option>
                        </select>
                    </div>
                </div>
                }
                    {/* {model && 
                        <div className="popup">
                           <PopUp></PopUp>
                        </div>
                     }  */}
                </div>              
            </div>  
                     
        </div>
    </>
}

export default AddQuiz;