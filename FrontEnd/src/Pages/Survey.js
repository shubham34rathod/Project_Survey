import React from 'react';
import '../styles/survey.css'
export default function Survey({data}) {
const {name, description, type, startDate, endDate} = data
    return <>
        <tr>
            <td>{name}</td>
            <td>{description}</td>
            <td>{type}</td>
            <td>{startDate}</td>
            <td>{endDate}</td>
            <td>
                <div className='action'>
                    <div id='edit'></div>
                    <div id='delete'></div>
                </div>
            </td>
        </tr>

    </>
}