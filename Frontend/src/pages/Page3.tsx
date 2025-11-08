import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Styles/page3.css'

function Page3() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        password: '',
        companyName: '',
        isAgency: 'yes'
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Navigate to account settings after signup
        navigate('/page4')
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='page3'>
            <div className='page3-content'>
                <h1 className='page3-title'>Create your PopX account</h1>

                <form onSubmit={handleSubmit} className='page3-form'>
                    <div className='page3-form-group'>
                        <label className='page3-label'>Full Name*</label>
                        <input
                            type='text'
                            name='fullName'
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder='Marry Doe'
                            className='page3-input'
                            required
                        />
                    </div>

                    <div className='page3-form-group'>
                        <label className='page3-label'>Phone number*</label>
                        <input
                            type='tel'
                            name='phoneNumber'
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder='Marry Doe'
                            className='page3-input'
                            required
                        />
                    </div>

                    <div className='page3-form-group'>
                        <label className='page3-label'>Email address*</label>
                        <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Marry Doe'
                            className='page3-input'
                            required
                        />
                    </div>

                    <div className='page3-form-group'>
                        <label className='page3-label'>Password *</label>
                        <input
                            type='password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='Marry Doe'
                            className='page3-input'
                            required
                        />
                    </div>

                    <div className='page3-form-group'>
                        <label className='page3-label'>Company name</label>
                        <input
                            type='text'
                            name='companyName'
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder='Marry Doe'
                            className='page3-input'
                        />
                    </div>

                    <div className='page3-form-group'>
                        <label className='page3-label-regular'>Are you an Agency?*</label>
                        <div className='page3-radio-group'>
                            <label className='page3-radio-label'>
                                <input
                                    type='radio'
                                    name='isAgency'
                                    value='yes'
                                    checked={formData.isAgency === 'yes'}
                                    onChange={handleChange}
                                    className='page3-radio'
                                />
                                <span className='page3-radio-text'>Yes</span>
                            </label>
                            <label className='page3-radio-label'>
                                <input
                                    type='radio'
                                    name='isAgency'
                                    value='no'
                                    checked={formData.isAgency === 'no'}
                                    onChange={handleChange}
                                    className='page3-radio'
                                />
                                <span className='page3-radio-text'>No</span>
                            </label>
                        </div>
                    </div>

                    <button type='submit' className='page3-btn'>
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Page3