import React, { useState, useEffect } from 'react'
import styles from './aboutteam.module.css';
import { fetchMembers } from '../services/api';
import instagram from "/instagram.svg"
import facebook from "/facebook.svg"
import twitter from "/twitter.svg"
import linkedin from "/linkedin.svg"
import { Link } from 'react-router-dom';

function aboutteam() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const getMembers = async () => {
            const member = await fetchMembers();
            setMembers(member.slice(0, 3)); // Set the filtered active items
        };
        getMembers();
    }, []);

    const truncateDescription = (description) => {
        if (description.length > 90) {
            return description.slice(0, 90) + '...'; // Limit to 100 chars and append '...'
        }
        return description; // Return description as is if it's under 100 chars
    };

    if (members === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className={`${styles.aboutteam}`}>
            <div className={`${styles.aboutteamcontent}`}>
                <div className={`${styles.aboutteamtitle}`}>Our Team</div>
                <h1>We champion the bold to achieve the extraordinary</h1>
                <p>Ippsum is the result of synergy between our teams and our customers. Our company culture is focused on excellent productivity, customer satisfaction, respect for team.</p>
                <div className={`${styles.aboutteamcontentrow}`}>
                    {members.map((casepost) => (
                        <div key={casepost.id} className={`${styles.aboutteamcontentcontainer}`} >
                            <div className={`${styles.homeaboutcontentimgs}`}>
                                <Link to={`/teams/${casepost.id}`} className="item-link"><img className={`${styles.aboutteamcontentcontainerimg}`} src={import.meta.env.BASE_URL + casepost.imagePath} /></Link>
                                <div className={casepost.id === 1 ? `${styles.homeaboutcontentaboutimg2}` : `${styles.homeaboutcontentaboutimg1}`} >{casepost.position}</div>
                            </div>
                            <h4>{casepost.name}</h4>
                            <h5>{truncateDescription(casepost.ownDescription)}</h5>
                            <div className={`${styles.servicesbannercontent}`}>
                                <a className={`${styles.aboutteamcontentcontainera}`} href={casepost.instagram}><img src={instagram} /></a>
                                <a className={`${styles.aboutteamcontentcontainera}`} href={casepost.facebook}><img src={facebook} /></a>
                                <a className={`${styles.aboutteamcontentcontainera}`} href={casepost.twitter}><img src={twitter} /></a>
                                <a className={`${styles.aboutteamcontentcontainera}`} href={casepost.linkedin}><img src={linkedin} /></a>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}
export default aboutteam
