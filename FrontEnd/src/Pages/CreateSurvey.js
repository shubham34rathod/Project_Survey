import React, { useState } from "react";
import Sidebar from "./Sidebar";
import '../styles/surveylist.css'
import '../styles/create-survey.css'
import '../styles/header.css'

export default function CreateSurvey() 
{
    let [survey_data,updateData]=useState({
        name:"",
        description:"",
        typeOfSurvey:"",
        startDate:"",
        endDate:"",
        otherCriteria:"",
        imageName:""
    })

    function onChange()
    {

    }

    return <>
        <div className='container'>
            <Sidebar />
            <div className="list-container">
                <header className='list-header border-bottom'>
                    <div className="text">Create Survey</div>
                    <div className="util">
                        <div id="cancel-btn">
                            <button>Cancel</button>
                        </div>
                        <div id="next-btn">
                            <button>Next</button>
                        </div>
                    </div>
                </header>
                <div className="form-container">
                    <div className="form-left">
                        <form>
                            <div>
                                <label>Name</label>
                                <input type="text" id="name" name="name" value={survey_data.name} onChange={(e)=>onChange(e,"name")}/>
                            </div>
                            <div>
                                <label>Description</label>
                                <input type="text" id="description" name="description" value={survey_data.description} onChange={(e)=>onChange(e,"description")}/>
                            </div>
                            <div>
                                <label>Type of survey</label>
                                <select id="select" value={survey_data.typeOfSurvey} onChange={(e)=>onChange(e,"typeOfSurvey")}>
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
                                    <input type="date" id="startDate" name="startDate" value={survey_data.startDate} onChange={(e)=>onChange(e,"startDate")}/>
                                </div>
                                <div>
                                    <label>End Date</label>
                                    <input type="date" id="endDate" name="endDate"value={survey_data.endDate} onChange={(e)=>onChange(e,"endDate")}/>
                                </div>
                            </div>
                            <div>
                                <label>Other Criteria</label>
                                <input type="text" id="otherCriteria" name="otherCriteria" value={survey_data.otherCriteria} onChange={(e)=>onChange(e,"otherCriteria")}/>
                            </div>
                            <div>
                                <label>Upload Image</label>
                                <input type="file" id="file" name="image" value={survey_data.imageName} onChange={(e)=>onChange(e,"imageName")}/>
    
                            </div>
                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}