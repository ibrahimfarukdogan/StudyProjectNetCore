import React, { useState, useEffect } from 'react'
import styles from './contact.module.css';
import contactphoneicon from "/contactphoneicon.svg"
import contactclockicon from "/contactclockicon.svg"
import contactlocationicon from "/contactlocationicon.svg"

function contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
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

        // Basic validation
        if (!formData.name) {
            formErrors.name = 'Name is required';
            isValid = false;
        }
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Valid email is required';
            isValid = false;
        }
        if (formData.phone && formData.phone.length < 10) {  // Only validate if phone is provided
            formErrors.phone = 'Phone number must be at least 10 digits';
            isValid = false;
        }
        if (formData.company && formData.company.length < 2) {  // Only validate if phone is provided
            formErrors.phone = 'Company number must be at least 2 digits';
            isValid = false;
        }
        if (!formData.message) {
            formErrors.name = 'Message is required';
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted successfully', formData);
        }
    };

    return (
        <div className={`${styles.contact}`}>
            <div className={`${styles.contactcontent}`}>
                <div className={`${styles.contactcontentcolumn}`}>
                    <div className={`${styles.contactcontenttitle}`}>PROCESS</div>
                    <h1>Contact Us. It’s Easy.</h1>
                    <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative.</p>
                    <div className={`${styles.contactcontentcolumnrow}`}>
                        <img src={contactphoneicon} />
                        <div className={`${styles.contactcontentcolumnrowtext}`}>
                            <h2>Call Today</h2>
                            <h3>+1 800 100 900</h3>
                        </div>
                    </div>
                    <div className={`${styles.contactcontentcolumnrow}`}>
                        <img src={contactclockicon} />
                        <div className={`${styles.contactcontentcolumnrowtext}`}>
                            <h2>Monday To Friday</h2>
                            <h3>9AM - 5PM</h3>
                        </div>
                    </div>
                    <div className={`${styles.contactcontentcolumnrow}`}>
                        <img src={contactlocationicon} />
                        <div className={`${styles.contactcontentcolumnrowtext}`}>
                            <h2>USA Office</h2>
                            <h3>195 Devonshire St Boston, MA 02110</h3>
                        </div>
                    </div>
                </div>
                <div className={`${styles.contactcontentcolumn}`}>
                    <form onSubmit={handleSubmit}>

                        <div className={`${styles.contactcontenttextrow}`}>
                            <div className={`${styles.contactcontenttextcolumn}`}>
                                <label>Full Name</label>
                                <input
                                    className={`${styles.contactcontentthininput}`}
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder='john david'
                                />
                                {errors.name && <span className="error">{errors.name}</span>}
                            </div>

                            <div className={`${styles.contactcontenttextcolumn}`}>
                                <label>Email</label>
                                <input
                                    className={`${styles.contactcontentthininput}`}
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder='consult@mail.com'
                                />
                                {errors.email && <span className="error">{errors.email}</span>}
                            </div>
                        </div>

                        <div className={`${styles.contactcontenttextrow}`}>
                            <div className={`${styles.contactcontenttextcolumn}`}>
                                <label>Phone</label>
                                <input
                                    className={`${styles.contactcontentthininput}`}
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder='+008 654 231'
                                />
                                {errors.phone && <span className="error">{errors.phone}</span>}
                            </div>

                            <div className={`${styles.contactcontenttextcolumn}`}>
                                <label>Company(optional)</label>
                                <input
                                    className={`${styles.contactcontentthininput}`}
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    placeholder='yourcompany.com'
                                />
                                {errors.company && <span className="error">{errors.company}</span>}
                            </div>
                        </div>

                        <div className={`${styles.contactcontenttextcolumn2}`}>
                            <label>Message</label>
                            <input
                                className={`${styles.contactcontentwideinput}`}
                                type="text"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder='Briefly tell us about your project and your current goals. How can we help you?'
                            />
                            {errors.message && <span className="error">{errors.message}</span>}
                        </div>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default contact
