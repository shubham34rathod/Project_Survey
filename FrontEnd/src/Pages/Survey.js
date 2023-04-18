import React from 'react';
import '../styles/survey.css'
export default function Survey() {

    return <>
        <tr>
            <td>Name</td>
            <td>Description</td>
            <td>Type</td>
            <td>Start Date</td>
            <td>End Date</td>
            <td>
                <div className='action'>
                    <div id='edit'></div>
                    <div id='delete'></div>
                </div>
            </td>
        </tr>

    </>
}