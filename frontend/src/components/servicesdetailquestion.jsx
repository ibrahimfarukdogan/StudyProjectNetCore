import React, { useState } from 'react'
import styles from './servicesdetailquestion.module.css';

function servicesdetailquestion() {
    const [openIndex, setOpenIndex] = useState(null);

    const accordionData = [
        { title: 'What will happen when I’ve sent my application?', paragraph: 'Ippsum is the result of synergy between our teams and our customers. Our company culture is focused on excellent productivity, customer satisfaction, respect for team and individual achievements.' },
        { title: 'Can I get a free trial before I purchase?', paragraph: 'Ippsum is the result of synergy between our teams and our customers. Our company culture is focused on excellent productivity, customer satisfaction, respect for team and individual achievements.' },
        { title: 'What should I include in my personal statement?', paragraph: 'Ippsum is the result of synergy between our teams and our customers. Our company culture is focused on excellent productivity, customer satisfaction, respect for team and individual achievements.' },
        { title: 'Will membership plans be charged automatically?', paragraph: 'Ippsum is the result of synergy between our teams and our customers. Our company culture is focused on excellent productivity, customer satisfaction, respect for team and individual achievements.' },
        { title: 'Can I get a free trial before I purchase?', paragraph: 'Ippsum is the result of synergy between our teams and our customers. Our company culture is focused on excellent productivity, customer satisfaction, respect for team and individual achievements.' },
    ];

    const handleToggle = (index) => {
        if (openIndex === index) {
            setOpenIndex(null); // Collapse if the same item is clicked
        } else {
            setOpenIndex(index); // Open the clicked item
        }
    };

    return (
        <div className={`${styles.servicesdetailquestion}`}>
            <div className={`${styles.servicesdetailquestioncontent}`}>
                <div className={`${styles.servicesdetailquestiontitle}`}>FAQ</div>
                <h1>Customer Questions</h1>
                <div className={`${styles.servicesdetailquestionaccordion}`}>

                    {accordionData.map((item, index) => (
                        <div key={index} className={styles.item}>
                            <div className={styles.title} onClick={() => handleToggle(index)}>
                                <span>{item.title}</span>
                                <span className={styles.toggle}>{openIndex === index ? '−' : '+'}</span>
                            </div>
                            <div className={`${styles.content} ${openIndex === index ? styles.open : ''}`}>
                                <p className={styles.paragraph}>
                                    {item.paragraph}
                                </p>
                            </div>
                        </div>
                    ))}


                </div>

            </div>
        </div>
    )
}

export default servicesdetailquestion