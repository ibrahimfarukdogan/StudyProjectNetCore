import React, { useEffect, useState } from 'react'
import styles from './teams.module.css';
import { fetchMembers } from '../services/api';
import instagram from "/instagram.svg"
import facebook from "/facebook.svg"
import twitter from "/twitter.svg"
import linkedin from "/linkedin.svg"
import Talkcontact from './talkcontact'
import { Link } from 'react-router-dom';

function teams() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const getMembers = async () => {
            const member = await fetchMembers();
            setMembers(member); // Set the filtered active items
        };
        getMembers();
    }, []);

    const truncateDescription = (description) => {
        if (description.length > 90) {
            return description.slice(0, 90) + '...'; // Limit to 100 chars and append '...'
        }
        return description; // Return description as is if it's under 100 chars
    };

    const groupIntoRows = (data, size) => {
        let result = [];
        for (let i = 0; i < data.length; i += size) { //0,4/1,5
            result.push(data.slice(i, i + size));
        }
        return result;
    };

    const rows = groupIntoRows(members, 3);

    if (members === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className={`${styles.teams}`}>
            <div className={`${styles.teamstext}`}>
                <h1>Meet Our Great Team</h1>
                <div className={`${styles.teamstextrow}`}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.</p>
                    <Link to={`/contact`} className={`${styles.homeblogtitletextlink}`}><button>Join our team</button></Link>
                </div>
            </div>
            <div className={`${styles.aboutteamcontent}`}>
                {rows.map((row, index) => (
                    <div key={index} className={`${styles.aboutteamcontentcolumn}`}>
                        <div className={`${styles.aboutteamcontentrow}`}>
                            {row.map((casepost) => (
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
                ))}
            </div>
            <hr className={`${styles.teamshr}`} />
            <Talkcontact />
            <hr className={`${styles.teamshr}`} />
        </div>
    )
}
export default teams
