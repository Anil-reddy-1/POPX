import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Styles/page2.css'

function Page2() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Navigate to account settings after login
        navigate('/page4')
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='page2'>
            <div className='page2-content'>
                <h1 className='page2-title'>Signin to your PopX account</h1>
                <p className='page2-subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

                <form onSubmit={handleSubmit} className='page2-form'>
                    <div className='page2-form-group'>
                        <label className='page2-label'>Email Address</label>
                        <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Enter email address'
                            className='page2-input'
                            required
                        />
                    </div>

                    <div className='page2-form-group'>
                        <label className='page2-label'>Password</label>
                        <input
                            type='password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='Enter password'
                            className='page2-input'
                            required
                        />
                    </div>

                    <button type='submit' className='page2-btn'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Page2