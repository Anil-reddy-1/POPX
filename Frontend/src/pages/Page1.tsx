import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Styles/page1.css'

function Page1() {
    const navigate = useNavigate()

    return (
        <div className='page1'>
            <div className='page1-content'>
                <h1 className='page1-title'>Welcome to PopX</h1>
                <p className='page1-subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

                <div className='page1-buttons'>
                    <button
                        className='page1-btn page1-btn-primary'
                        onClick={() => navigate('/page3')}
                    >
                        Create Account
                    </button>
                    <button
                        className='page1-btn page1-btn-secondary'
                        onClick={() => navigate('/page2')}
                    >
                        Already Registered? Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Page1