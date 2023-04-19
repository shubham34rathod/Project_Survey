import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import left_arrow from "../images/left-arrow.jpg"
import  settings from "../images/gear.jpg"
import '../styles/addQuiz.css'

function AddQuiz()
{
    return <>
        <Header></Header>
        <Sidebar></Sidebar>
        <div className="g_parent">
            <div className="s_parent1">
                <div className="s_child1">
                    <div className="rec1">
                        <img src={left_arrow} alt="arrow" className="arrow" />
                        <p className="create">Create Questions</p>
                    </div>
                    <div className="rec2">
                        <button className="preview">Preview</button>
                        <button className="save">Save</button>
                    </div>
                </div>
            </div>
            <div className="s_parent2" >
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
                            <label for="option" className="label">Option1</label>
                        </div>
                        <div  className="que_box">
                            <input type="radio" name="option" id="option" />
                            <label for="option" className="label">Option1</label>
                        </div>
                        <div className="que_box">
                            <input type="radio" name="option" id="option" />
                            <label for="option" className="label">Option1</label>
                        </div>
                        <button className="add_que">Add question</button>
                    </div>                    
                </div>  
                <div className="s_parent3">
                <img src={settings} alt="settings" className="settings" />
            </div>              
            </div>            
        </div>
    </>
}

export default AddQuiz;