import React, { useState, useEffect } from 'react'
import styles from './homecasestudy.module.css';
import { fetchCaseStudyItems, fetchCaseStudyCategories } from '../services/api';
import plusbutton from "/plusbutton.svg"
import { Link } from 'react-router-dom';

function homecasestudy() {
    const [blogs, setCasePosts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCasePosts = async () => {
            const items = await fetchCaseStudyItems();
            setCasePosts(items.slice(0, 6)); // Set the filtered active items
        };
        const getCategories = async () => {
            const category = await fetchCaseStudyCategories();
            setCategories(category); // Set the filtered active items
        };
        getCasePosts();
        getCategories();
    }, []);

    const groupIntoRows = (data, size) => {
        let result = [];
        for (let i = 0; i < data.length; i += size) { //0,4/1,5
            result.push(data.slice(i, i + size));
        }
        return result;
    };

    const rows = groupIntoRows(blogs, 3);

    const getCategoryName = (categoryId) => {
        const category = categories.find((cat) => cat.id === categoryId);
        return category ? category.categoryName : 'Unknown';
    };

    if (blogs.length === 0 || categories.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className={`${styles.homecasestudy}`}>
            <div className={`${styles.homecasestudybackground}`}>
                <div className={`${styles.homecasestudytext}`}>
                    <div className={`${styles.homecasestudytext1}`}>PROCESS</div>
                    <div className={`${styles.homecasestudytextinside}`}>
                        <h4>Our client, global analytical techno company, wanted to build market.</h4>
                        <Link to={`/casestudy`} className={`${styles.homeblogtitletextlink}`}><button>More Gallery</button></Link>
                    </div>
                </div>
                <div className={`${styles.homecasestudycontent}`}>
                    {rows.map((row, index) => (
                        <div key={index} className={`${styles.homecasestudycontentinside}`}>
                            <div className={`${styles.homecasestudycontentrow}`}>
                                {row.map((casepost) => (
                                    <div key={casepost.id} className={`${styles.homecasestudycontentcontainer}`} >
                                        <div className={`${styles.servicesbannercontent}`}>
                                            <div className={`${styles.overlay}`}>
                                                <Link to={`/casestudy/${casepost.id}`} key={casepost.id} className={`${styles.overlaybutton}`}><img src={plusbutton} /></Link>
                                                <h4>{casepost.title}</h4>
                                                <h5>{getCategoryName(casepost.categoryId)}</h5>
                                            </div>
                                            <img src={import.meta.env.BASE_URL + casepost.titleImage} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`${styles.homecasestudybottom}`}>
                <div className={`${styles.homecasestudybottomtext}`}>
                    <h1>1128+</h1>
                    <h2>Successful Work</h2>
                </div>
                <div className={`${styles.homecasestudybottomtext}`}>
                    <h1>908+</h1>
                    <h2>Team member</h2>
                </div>
                <div className={`${styles.homecasestudybottomtext}`}>
                    <h1>258+</h1>
                    <h2>Happy Customers</h2>
                </div>
                <div className={`${styles.homecasestudybottomtext}`}>
                    <h1>564+</h1>
                    <h2>Creative Idea</h2>
                </div>
            </div>
        </div>
    )
}
export default homecasestudy
