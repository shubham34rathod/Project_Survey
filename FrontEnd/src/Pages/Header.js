import React from 'react'
import '../styles/header.css'
//import home from '../../public/images/home-run (1).svg'

export default function Header(){

    return<>
        
            <header className='top-header'>
                <div id='surveyheader'>
                    <section className='logo'>Logo</section>
                    <section id='profile'>
                        <div id="profilepic"></div>
                        <div className='dropdown'></div>
                    </section>
                </div>

            </header>
    </>
}