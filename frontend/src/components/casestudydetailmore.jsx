import React, { useEffect, useState } from 'react'
import styles from './casestudydetailmore.module.css';
import { fetchCaseStudyItems } from '../services/api';
import Subscribe from '../components/subscribe'
import { Link } from 'react-router-dom';

function casestudydetailmore() {
    const [blogs, setCasePosts] = useState([]);

    useEffect(() => {
        const getCasePosts = async () => {
            const items = await fetchCaseStudyItems();
            const shuffled = items.sort(() => Math.random() - 0.5);
            const selectedPosts = shuffled.slice(0, 3);
            setCasePosts(selectedPosts);
        };
        getCasePosts();
    }, []);

    if (blogs.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className={`${styles.casestudydetailmore}`}>
            <Subscribe />
            <div className={`${styles.casestudydetailmorecontent}`}>
                <h1>More case studies</h1>
                <div className={`${styles.homecasestudycontentrow}`}>
                    {blogs.map((casepost) => (
                        <div key={casepost.id} className={`${styles.homecasestudycontentcontainer}`} >
                            <div className={`${styles.servicesbannercontent}`}>
                                <Link reloadDocument to={`/casestudy/${casepost.id}`} key={casepost.id} className={`${styles.overlay}`} ><h4>{casepost.title}</h4></Link>
                                <img src={import.meta.env.BASE_URL + casepost.titleImage} />
                            </div>
                        </div>
                    ))}
                </div>
                <Link to={`/casestudy`}><button>Browse all case studies</button></Link>
                                
            </div>
        </div>
    )
}
export default casestudydetailmore