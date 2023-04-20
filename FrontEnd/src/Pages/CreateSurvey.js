import React from "react";
import Sidebar from "./Sidebar";
import '../styles/surveylist.css'
import '../styles/create-survey.css'
import '../styles/header.css'
import { Outlet, useNavigate } from "react-router-dom";

export default function CreateSurvey() {
const navigate = useNavigate()

    return <>
        <div className='container'>
            <Sidebar />
            <div className="list-container">
                <header className='list-header border-bottom'>
                    <div className="text">Create Survey</div>
                    <div className="util">
                        <div id="cancel-btn">
                            <button onClick={()=>{
                                navigate(-1)
                            }}>Cancel</button>
                        </div>
                        <div id="next-btn">
                            <button onClick={()=>{
                                navigate('/list-survey/create/questions')
                            }}>Next</button>
                        </div>
                    </div>
                </header>
                <div className="form-container">
                    <div className="form-left">
                        <form>
                            <div>
                                <label>Name</label>
                                <input type="text" id="name" name="name" />
                            </div>
                            <div>
                                <label>Description</label>
                                <input type="text" id="description" name="description" />
                            </div>
                            <div>
                                <label>Type of survey</label>
                                <select id="select" >
                                    <option defaultChecked disabled>Select</option>

                                    <option>Type-1</option>
                                    <option>Type-2</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="form-right">
                        <form>
                            <div className="util">
                                <div>
                                    <label>Start Date</label>
                                    <input type="date" id="startDate" name="startDate" />
                                </div>
                                <div>
                                    <label>End Date</label>
                                    <input type="date" id="endDate" name="endDate" />
                                </div>
                            </div>
                            <div>
                                <label>Other Criteria</label>
                                <input type="text" id="otherCriteria" name="otherCriteria" />
                            </div>
                            <div>
                                <label>Upload Image</label>
                                <input type="file" id="file" name="image" />
    
                            </div>
                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}