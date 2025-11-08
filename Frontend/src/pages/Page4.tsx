import React from 'react'
import './Styles/page4.css'

function Page4() {
    return (
        <div className='page4'>
            <div className='page4-content'>
                <h1 className='page4-title'>Account Settings</h1>

                <div className='page4-profile'>
                    <div className='page4-avatar-wrapper'>
                        <div className='page4-avatar'>
                            <img
                                src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop'
                                alt='Profile'
                                className='page4-avatar-img'
                            />
                            <div className='page4-avatar-badge'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8" fill="#7C3AED" />
                                    <path d="M8 4V12M4 8H12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>
                        <div className='page4-profile-info'>
                            <h2 className='page4-profile-name'>Marry Doe</h2>
                            <p className='page4-profile-email'>Marry@Gmail.Com</p>
                        </div>
                    </div>

                    <div className='page4-bio'>
                        <p className='page4-bio-text'>
                            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page4