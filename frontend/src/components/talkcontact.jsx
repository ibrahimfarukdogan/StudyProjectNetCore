import React, { useState } from 'react'
import styles from './talkcontact.module.css';
import talkcontactimgbackground from "/talkcontactimgbackground.svg"
import talkcontactimg from "/talkcontactimg2.png"

function talkcontact() {

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
        <div className={`${styles.talkcontact}`}>

            <div className={`${styles.homeaboutcontentimgs}`}>
                <img className={`${styles.homeaboutcontentsplatterimg}`} src={talkcontactimgbackground} />
                <img className={`${styles.homeaboutcontentaboutimg}`} src={talkcontactimg} />
                <div className={`${styles.talkcontacttext}`}>
                    <div className={`${styles.talkcontacttexttitle}`}>Contact</div>
                    <h2>Ready To Talk?</h2>
                    <h3>Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus sed turpis. Pellentesque  pellentesque habitant morbi tristique.</h3>
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
                        <button type="submit">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default talkcontact