import React, { useState } from 'react'
import styles from './subscribe.module.css';
import greenborder from '/greenborder.svg'
import backgroundpatter from '/backgroundpatter.svg'

function subscribe() {
    const [formData, setFormData] = useState({
        email: '',
    });

    const [errors, setErrors] = useState({
        email: '',
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
        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Here you can make an API call or do something with the form data
            console.log('Form submitted successfully', formData);
        }
    };


    return (
        <div className={`${styles.subscribe}`}>
            <div className={`${styles.homeaboutcontentimgs}`}>
                <img className={`${styles.homeaboutcontentsplatterimg}`} src={backgroundpatter} />
                <img className={`${styles.homeaboutcontentaboutimg}`} src={greenborder} />
                <div className={`${styles.talkcontacttext}`}>
                    <div className={`${styles.talkcontacttextcolumn}`}>
                        <h2>Subscribe Our Newsletter</h2>
                        <h3>Build stronger Customer Relationships with <b>Consultalk</b></h3>
                    </div>
                    <div className={`${styles.contactcontenttextrow}`}>
                        <form onSubmit={handleSubmit}>
                            <input
                                className={`${styles.contactcontentthininput}`}
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder='your mail address'
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </form>
                        <button type="submit">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default subscribe