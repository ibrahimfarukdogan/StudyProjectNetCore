import React, { useState, useEffect } from 'react'
import styles from './blogscontent.module.css';
import Talkcontact from './talkcontact'
import { fetchMembers, fetchBlogs } from '../services/api';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

function blogscontent() {
    const [blogs, setBlogs] = useState([]);
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const getBlogs = async () => {
            const items = await fetchBlogs();
            setBlogs(items);
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

    const groupIntoRows = (data, size) => {
        let result = [];
        for (let i = 0; i < data.length; i += size) { //0,4/1,5
            result.push(data.slice(i, i + size));
        }
        return result;
    };

    const rows = groupIntoRows(blogs, 2);

    if (blogs.length === 0 || members.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className={`${styles.blogscontent}`}>
            <div className={`${styles.blogscontentitems}`}>

                <div className={`${styles.blogscontentitemscolumn}`}>
                    <div>
                        <div className={`${styles.homeblogtitle}`}> Blog</div>
                        <div className={`${styles.homeblogtitletext}`}>
                            <h3>Take a look at our latest articles & resources</h3>
                            <Link reloadDocument to={`/blogs`} className={`${styles.homeblogtitletextlink}`}><button>More News</button></Link>
                        </div>
                    </div>

                    {rows.map((row, index) => (
                        <div key={index} className={`${styles.homeblogtitlerow}`}>
                            {row.map((casepost) => (
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
                    ))}

                </div>

                <Talkcontact />
            </div>
        </div>
    )
}
export default blogscontent
