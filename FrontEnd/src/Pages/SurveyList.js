import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import '../styles/surveylist.css'
//import axios from 'axios'
import Survey from './Survey'
const config = require('../config/config')

const user = [{
    name: "Sanket",
    description: "ANC",
    type: "Q",
    startDate: "2023",
    endDate: "2023" 
},
{
    name: "Sanket",
    description: "ANC",
    type: "Q",
    startDate: "2023",
    endDate: "2023" 
},
{
    name: "Sanket",
    description: "ANC",
    type: "Q",
    startDate: "2023",
    endDate: "2023" 
}]

export default function SurveyList() {

    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     axios.get(config.backEndUrl)
    //     .then((data)=>{
    //         setData(data)
    //     })
    // })
    

    return <>
        <div className='container'>
            <Sidebar />
            <div className='list-container'>
                <header className='list-header'>
                    <div id='searchform'>
                        <form>
                            <label>Survey List</label>
                            <input type='text' placeholder='Search' />
                        </form>
                    </div>
                    <div id='util'>
                        <div id='sort'></div>
                        <div id='filter'></div>
                        <div id='create-btn'>
                            <button>Create</button>
                        </div>
                    </div>
                </header>
                <div className='survey-list'>
                    <table>
                        <thead>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            {user && user.map(item=>{
                                return <Survey data={item} key={item.id}/>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}