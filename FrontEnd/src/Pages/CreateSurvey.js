import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import '../styles/surveylist.css'
import '../styles/create-survey.css'
import '../styles/header.css'
import { useNavigate } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css'




export default function CreateSurvey() {
    const navigate = useNavigate()
    const [img, setImg] = useState({
        img: "",
        name:""
    });
    function handleChange(e) {
        setImg({
            img: URL.createObjectURL(e.target.files[0]),
            name: e.target.files[0].name
        });
    }
    function removeImage() {
        setImg({
            img: "",
            name:""
        })
    }

    return <>
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


                                {!img.img && <div className="image-upload-wrap">
                                    <input className="file-upload-input" type='file' onChange={handleChange} accept="image/*" />
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