import React from 'react'
// import '../styles/create-survey.css'
import '../styles/theme.css'

export default function Theme() {

    return <>
        <div className='transparent-back'>
            <div className='theme-container'>
                <header className='list-header border-bot'>
                    <h3>Theme Settings</h3>
                    <div id='close-icon'></div>
                </header>
                <form className='theme-form'>
                    <div>
                        <label>Theme</label>
                        <select >
                            <option defaultChecked disabled>Select</option>
                            <option>Dark</option>
                            <option>Light</option>
                        </select>
                    </div>
                    <div className='grid-form'>
                        <div>
                            <div>
                                <label>Theme name</label>
                                <input id='themename' type='text' />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>All Questions Mandatory</label>
                                <select>
                                    <option defaultChecked disabled>Select</option>

                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>Enable Skip</label>
                                <select>
                                    <option defaultChecked disabled>Select</option>

                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Select Font</label>
                            <select>
                                <option defaultChecked disabled>Select</option>

                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <div>
                            <label>Color</label>
                            <input id='color' type='color' />
                        </div>
                    </div>
                </form>
                <div className="util theme-btn">
                    <div id="cancel-btn">
                        <button>Cancel</button>
                    </div>
                    <div id="next-btn">
                        <button>Save</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}