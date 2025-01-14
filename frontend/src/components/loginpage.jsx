import React, { useState } from 'react'
import styles from './loginpage.module.css';
import { useNavigate } from 'react-router-dom';
import { postMembers } from '../services/api';
import greenborder from '/greenborder.svg'
import backgroundpatter from '/backgroundpatter.svg'

export default function loginpage() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const validateForm = () => {
        let formErrors = {};
        let isValid = true;

        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Valid email is required';
            isValid = false;
        }
        if (!formData.password) {
            formErrors.password = 'Password is required';
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (validateForm()) {
            console.log('Form submitted successfully', formData);

            try {
                const data = await postMembers(formData.email, formData.password);
                navigate('/adminpage');
            } catch (error) {
                setErrorMessage(error.message || 'An error occurred. Please try again later.');
            }
        }
    };

    return (
        <div className={`${styles.loginpage}`}>
            <div className={`${styles.casestudydetailscontentareabanner}`}>
                <div className={`${styles.casestudydetailscontentareabannerimgs}`}>
                    <img className={`${styles.homeaboutcontentsplatterimg}`} src={backgroundpatter} />
                    <img className={`${styles.homeaboutcontentaboutimg}`} src={greenborder} />
                </div>
                <div className={`${styles.casestudydetailscontentareabannertextarea}`}>
                    <div className={`${styles.contactcontentcolumn}`}>
                        <form onSubmit={handleSubmit}>
                            <div className={`${styles.contactcontenttextarea}`}>

                                <div className={`${styles.contactcontenttextcolumn}`}>
                                    <label>Enter Email</label>
                                    <input
                                        className={`${styles.contactcontentthininput}`}
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder='Enter Your Email'
                                    />
                                    <div className={`${styles.errorarea}`}>{errors.email && errors.email}</div>
                                </div>

                                <div className={`${styles.contactcontenttextcolumn}`}>
                                    <label>Enter Password</label>
                                    <input
                                        className={`${styles.contactcontentthininput}`}
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder='Enter Your Password'
                                    />
                                    <div className={`${styles.errorarea}`}>{errors.password && errors.password}</div>
                                </div>
                                <button type="submit">Submit</button>
                                <div className={`${styles.errorarea}`}>{errorMessage && errorMessage}</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
