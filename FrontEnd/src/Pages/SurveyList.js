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
                            <input type='text' />
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
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            <tr></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}