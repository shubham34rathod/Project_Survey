import React from 'react'
import Sidebar from './Sidebar'
import '../styles/surveylist.css'

export default function SurveyList() {

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
                            <tr>
                            <td>Name</td>
                            <td>Description</td>
                            <td>Type</td>
                            <td>Start Date</td>
                            <td>End Date</td>
                            <td>Action</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}