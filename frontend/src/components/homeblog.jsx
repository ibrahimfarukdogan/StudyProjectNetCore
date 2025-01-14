import React, { useState, useEffect } from 'react'
import { format } from 'date-fns';
import styles from './homeblog.module.css';
import { fetchMembers, fetchBlogs } from '../services/api';
import { Link } from 'react-router-dom';

function homeblog() {
    const [blogs, setBlogs] = useState([]);
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const getBlogs = async () => {
            const items = await fetchBlogs();
            setBlogs(items.slice(0, 2));
        };
        const getMembers = async () => {
            const data = await fetchMembers();
            setMembers(data);
        };
        getBlogs();
        getMembers();
    }, []);

    const getMember = (memberId) => {
        const member = members.find((cat) => cat.id === memberId);
        return member;
    };

    if (blogs.length === 0 || members.length === 0) {
        return <div>Loading...</div>;
    }
    return (
        <div className={`${styles.homeblog}`}>
            <div className={`${styles.homeblogcontent}`}>
                <div className={`${styles.homeblogtitle}`}> Blog</div>
                <div className={`${styles.homeblogtitletext}`}>
                    <h3>Take a look at our latest articles & resources</h3>
                    <Link to={`/blogs`} className={`${styles.homeblogtitletextlink}`}><button>More News</button></Link>
                </div>
                <div className={`${styles.homeblogtitlerow}`}>
                    {blogs.map((casepost) => (
                        <div key={casepost.id} className={`${styles.homeblogtitlerowcontent}`} >
                            <div className={`${styles.homeblogtitlerowimg}`}>
                                <img src={import.meta.env.BASE_URL + casepost.titleImage} />
                            </div>
                            <h2>{casepost.title}</h2>
                            <p>{casepost.description}</p>

                            <div className={`${styles.overlay}`}>
                                <div className={`${styles.overlayimg}`}><img src={import.meta.env.BASE_URL + getMember(casepost.memberId).imagePath} /></div>
                                <h4>{getMember(casepost.memberId).name}</h4>
                                <div className={`${styles.overlaydiv}`}>|</div>
                                <h5>{format(new Date(casepost.creationDate), 'MMMM d, yyyy')}</h5>
                                <Link to={`/blogs/${casepost.id}`} className={`${styles.overlaybutton}`}><button>Read More</button></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default homeblog
