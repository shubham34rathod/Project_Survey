import React, { useContext, useState } from "react";
import Sidebar from "./Sidebar";
import Cookies from'universal-cookie'
import Header from "./Header";
import '../styles/surveylist.css'
import '../styles/create-survey.css'
import '../styles/header.css'
import { useNavigate } from "react-router-dom";
import { Filecontext } from "../config/FileContext";
// import 'bootstrap/dist/css/bootstrap.css'




export default function CreateSurvey() 
{
    const navigate = useNavigate()
    const {questions, setQuestions, mergedQuestions, setMergedQuestion, surveyInfo, setSurveyInfo} = useContext(Filecontext)
    const [emtAlert,updateAlert]=useState(false)

    const cookies=new Cookies()

    let token=cookies.get("uid")
    if(!token)
    {
        // window.location.reload(true)
        navigate('/')
    }

    const [surveyData,updateData]=useState({
        name:"",
        description:"",
        typeOfSurvey:"",
        startDate:"",
        endDate:"",
        otherCriteria:"",
        imageName:"",
        token:cookies.get("uid")
    })

    function onChange(e,prop)
    {
        updateData((data)=>({
            ...data,
            [prop]:e.target.value
        }))
    }

    
    const [img, setImg] = useState({
        img: "",
        name:""
    });
    function handleChange(e) {
        setImg({
            img: URL.createObjectURL(e.target.files[0]),
            name: e.target.files[0].name
        });
        updateData((img_name)=>({
            ...img_name,
            imageName:e.target.files[0].name
        }))
    }
    function removeImage() {
        setImg({
            img: "",
            name:""
        })
    }

    function fn()
    {
        // console.log(surveyData);
    }

    return  <>
    {/* <FirstContext></FirstContext> */}
    <Header></Header>
        <div className='container' style={{margin:"0px",padding:"0px"}}>
            <Sidebar />
            <div className="list-container">
                <header className='list-header border-bottom'>
                    <div className="text">Create Survey</div>
                    <div className="util">
                        <div id="cancel-btn">
                            <button onClick={() => {
                                navigate('/list-survey')
                            }}>Cancel</button>
                        </div>
                        <div id="next-btn">
                            <button onClick={() => {
                                setSurveyInfo(prev=>({
                                    ...surveyData,
                                    questions: []
                                }))
                                let token=cookies.get("uid")
                                if(!token)
                                {
                                    navigate('/')
                                }
                                else{
                                    if(surveyData.name==='' || surveyData.description==='' || surveyData.typeOfSurvey==='' || surveyData.startDate==='' || surveyData.endDate==='' || surveyData.imageName==='')
                                    {
                                       alert('All fields are required')
                                    }
                                    else{
                                    navigate('/list-survey/create/questions',{state:surveyData})
                                    } 
                                }  //sending data to AddQuiz                             
                            }} onClickCapture={fn}>Next</button>
                        </div>
                    </div>
                </header>
                <div className="form-container">
                    <div className="form-left">
                        <form method="POST">
                            <div>
                                <label>Name</label>
                                <input type="text" id="name" name="name" value={surveyData.name} onChange={(e)=>onChange(e,"name")}/>
                            </div>
                            <div>
                                <label>Description</label>
                                <input type="text" id="description" name="description" value={surveyData.description} onChange={(e)=>onChange(e,"description")}/>
                            </div>
                            <div>
                                <label>Type of survey</label>
                                <select id="select" name="type" value={surveyData.typeOfSurvey} onChange={(e)=>onChange(e,"typeOfSurvey")}>
                                    <option defaultChecked disabled>Select</option>
                                    <option>None</option>
                                    <option>Video</option>
                                    <option>Image</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="form-right">
                        <form>
                            <div className="util">
                                <div>
                                    <label>Start Date</label>
                                    <input type="date" id="startDate" name="startDate" value={surveyData.startDate} onChange={(e)=>onChange(e,"startDate")}/>
                                </div>
                                <div>
                                    <label>End Date</label>
                                    <input type="date" id="endDate" name="endDate" value={surveyData.endDate} onChange={(e)=>onChange(e,"endDate")}/>
                                </div>
                            </div>
                            <div>
                                <label>Other Criteria</label>
                                <input type="text" id="otherCriteria" name="otherCriteria" value={surveyData.otherCriteria} onChange={(e)=>onChange(e,"otherCriteria")}/>
                            </div>
                            <div>
                                <label>Upload Image</label>


                                {!img.img && <div className="image-upload-wrap">
                                    <input className="file-upload-input" type='file' onChange={handleChange}  accept="image/*" name="image"/>
                                    <div className="drag-text">
                                        <h3>Click here to select Image</h3>
                                    </div>
                                </div>}
                                {img.img && <div className="file-upload-content">
                                    <img className="file-upload-image" src={img.img} alt="img" />
                                    <div className="image-title-wrap">
                                        <button type="button" onClick={removeImage} className="remove-image">Remove <span className="image-title">{img.name}</span></button>
                                    </div>
                                </div>}
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}