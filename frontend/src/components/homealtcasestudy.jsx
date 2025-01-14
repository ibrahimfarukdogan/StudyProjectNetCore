import React, { useState, useEffect } from 'react'
import styles from './homealtcasestudy.module.css';
import { fetchCaseStudyItems, fetchCaseStudyCategories } from '../services/api';
import plusbutton from "/plusbutton.svg"
import { Link } from 'react-router-dom';

function homealtcasestudy() {
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

    const rows = groupIntoRows(blogs, 2);

    const getCategoryName = (categoryId) => {
        const category = categories.find((cat) => cat.id === categoryId);
        return category ? category.categoryName : 'Unknown';
    };

    const handleItemClick = (url) => {
        console.log("url: " + url);
        //Navigate(url);
    };

    if (blogs.length === 0 || categories.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className={`${styles.homealtblog}`}>
            <div className={styles.homealtblogfront}></div>
            <div className={styles.content}>
                <div className={`${styles.contentinside}`}>
                    <div className={`${styles.contentinsidetextarea}`}>
                        <div className={`${styles.contentinsidetextareatexts}`}>
                            <div className={`${styles.contentinsidetextareatextstitle}`}>Work</div>
                            <h1>My latest project</h1>
                        </div>
                        <Link to={`/casestudy`} className={`${styles.homeblogtitletextlink}`}><button>More Work</button></Link>
                    </div>

                    <div className={`${styles.homecasestudycontent}`}>
                        {rows.map((row, index) => (
                            <div key={index} className={`${styles.homecasestudycontentrow}`}>
                                {row.map((casepost) => (
                                    <div key={casepost.id} >
                                        {casepost.id === 6 || casepost.id === 7 || casepost.id === 10 ? (
                                            <div key={casepost.id} className={`${styles.homecasestudycontentcontainer2}`}>
                                                <div className={`${styles.servicesbannercontent}`}>
                                                    <div className={`${styles.overlay2}`}>
                                                        <Link to={`/casestudy/${casepost.id}`} key={casepost.id} className={`${styles.overlaybutton2}`}><img src={plusbutton} /></Link>
                                                        <h4>{casepost.title}</h4>
                                                        <h5>{getCategoryName(casepost.categoryId)}</h5>
                                                    </div>
                                                    <img className={`${styles.homecasestudycontentcontainer2img}`} src={import.meta.env.BASE_URL + casepost.titleImage} />
                                                </div>
                                            </div>
                                        ) : (
                                            <div key={casepost.id} className={`${styles.homecasestudycontentcontainer}`}>
                                                <div className={`${styles.servicesbannercontent}`}>
                                                    <div className={`${styles.overlay}`}>
                                                        <Link to={`/casestudy/${casepost.id}`} key={casepost.id} className={`${styles.overlaybutton}`}><img src={plusbutton} /></Link>
                                                        <h4>{casepost.title}</h4>
                                                        <h5>{getCategoryName(casepost.categoryId)}</h5>
                                                    </div>
                                                    <img className={`${styles.homecasestudycontentcontainerimg}`} src={import.meta.env.BASE_URL + casepost.titleImage} />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}
export default homealtcasestudy