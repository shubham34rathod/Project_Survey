import React, { useContext, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import '../styles/surveylist.css'
import Cookies from'universal-cookie'
//import axios from 'axios'
import Survey from './Survey'
import '../styles/header.css'
import { createRoutesFromChildren, useNavigate } from "react-router-dom";
import Header from './Header'
import { Filecontext } from '../config/FileContext'
import backEndUrl from '../config/config'

const config = require('../config/config')




export default function SurveyList() 
{
    const {questions, setQuestions, mergedQuestions, setMergedQuestion, surveyInfo, setSurveyInfo} = useContext(Filecontext)

    const navigate = useNavigate();
    const [isAscending, setIsAscending] = useState({
        name: true,
        sod: true,
        eod: true
    })
    const [search, setSearch] = useState("");


    const cookies=new Cookies()

    let token=cookies.get("uid")
        if(!token)
        {
            navigate('/')
        }
        
    
    let [tmp_token,updateToken]=useState({
        token:cookies.get("uid")
    })
    const searchInList =(e)=>{
        setSearch(e.target.value)
        // const result = data
        // console.log(result);
        // setData(result)
    }
    const sortByName =(e)=>{
        if(isAscending.name){
            let result = data.sort((a, b)=> b.name.localeCompare(a.name));
        setData([...result]);
        }
        else{
            
         let result = data.sort((a, b)=> a.name.localeCompare(b.name));
        setData([...result]);}
    }
    const sortBySOD =(e)=>{
        if(isAscending.sod){
            let result = data.sort((a, b)=> b.startDate.localeCompare(a.startDate));
        setData([...result]);
        }
        else{ 
         let result = data.sort((a, b)=> a.startDate.localeCompare(b.startDate));
        setData([...result]);}
    }
    const sortByEOD =(e)=>{
        if(isAscending.eod){
            let result = data.sort((a, b)=> b.endDate.localeCompare(a.endDate));
        setData([...result]);
        }
        else{ 
         let result = data.sort((a, b)=> a.endDate.localeCompare(b.endDate));
        setData([...result]);}
    }
    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     axios.get(config.backEndUrl)
    //     .then((data)=>{
    //         setData(data)
    //     })
    // })

    const [data,setData]=useState([]);

    useEffect(()=>{
            fetch(`https://survey-backend-cp5k.onrender.com/get-surveys`,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(tmp_token),
            })
           .then((data)=>data.json())
           .then((responce)=>{
                setData(responce)
                // console.log(responce[0])
           })
           .catch(()=>console.log("servey fetching error"))
        //    const cookies=new Cookies()
    },[])
    
    return <>
        <div className='container'>
            <Header/>
            <Sidebar />
            <div className='list-container'>
                <header className='list-header'>
                    <div id='searchform'>
                        <form>
                            <label>Survey List</label>
                            <input type='text' onChange={searchInList} value={search} placeholder='Search' />
                        </form>
                    </div>
                    <div className='util'>
                        {/* <div id='sort'></div>
                        <div id='filter'></div> */}
                        <div id='create-btn'>
                            <button onClick={()=>{
                                setSurveyInfo({})
                                let token=cookies.get("uid")
                                if(!token)
                                {
                                    navigate('/')
                                }
                               else( navigate('/list-survey/create'))
                               setSurveyInfo({})
                            }}>Create</button>
                        </div>
                    </div>
                </header>
                <div className='survey-list'>
                    <table>
                        <thead>
                            <th onClick={()=>{
                                setIsAscending(prev=>({
                                    ...prev,
                                    name: !prev.name
                                }))
                                sortByName()}}>Name</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th onClick={()=>{
                                setIsAscending(prev=>({
                                    ...prev,
                                    sod: !prev.sod
                                }))
                                sortBySOD()}}>Start Date</th>
                            <th onClick={()=>{
                                setIsAscending(prev=>({
                                    ...prev,
                                    eod: !prev.eod
                                }))
                                sortByEOD()}}>End Date</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            
                            {data && data.filter((item)=>{
            return search.toLowerCase() === '' 
            ? item 
            : item['name'].toLowerCase().includes(search);
        }).map((item, i)=>{
                                return <Survey data={item} key={i}/>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    </>
}