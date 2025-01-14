import React, { useEffect, useState } from 'react'
import styles from './teamsdetail.module.css';
import { fetchMemberById } from '../services/api';
import { useParams } from 'react-router-dom';
import greenborder from '/greenborder.svg'
import backgroundpatter from '/backgroundpatter.svg'
import instagram from "/instagram.svg"
import facebook from "/facebook.svg"
import twitter from "/twitter.svg"
import linkedin from "/linkedin.svg"
import Subscribe from '../components/subscribe'

function teamsdetail() {
    const { id } = useParams(); // Get the `id` from the URL
    const [item, setItem] = useState(null);

    useEffect(() => {
        const getServices = async () => {
            const items = await fetchMemberById(id);
            setItem(items); // Set the filtered active items
        };
        getServices();
    }, []);

    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <div className={`${styles.teamsdetail}`}>
            <div className={`${styles.teamsdetailcontent}`}>
                <div className={`${styles.homeaboutcontentimgs}`}>
                    <img className={`${styles.homeaboutcontentsplatterimg}`} src={backgroundpatter} />
                    <img className={`${styles.homeaboutcontentaboutimg}`} src={greenborder} />
                    <img className={`${styles.homeaboutcontentmarkettimg}`} src={import.meta.env.BASE_URL + item.imagePath} />
                </div>
                <div className={`${styles.teamsdetailcontentcolumn}`}>
                    <div className={`${styles.teamsdetailcontentcolumnrow1}`}>
                        <h1>{item.name}</h1>
                        <div className={`${styles.teamsdetailcontentcolumnrow1imgs}`}>
                            <a className={`${styles.aboutteamcontentcontainera}`} href={item.instagram}><img src={instagram} /></a>
                            <a className={`${styles.aboutteamcontentcontainera}`} href={item.facebook}><img src={facebook} /></a>
                            <a className={`${styles.aboutteamcontentcontainera}`} href={item.twitter}><img src={twitter} /></a>
                            <a className={`${styles.aboutteamcontentcontainera}`} href={item.linkedin}><img src={linkedin} /></a>

                        </div>
                    </div>
                    <h2>{item.position}</h2>
                    <div className={`${styles.teamsdetailcontentcolumn2}`}>
                        <p>{item.ownDescription}</p>
                    </div>
                    <div className={`${styles.teamsdetailcontentcolumn3}`}>
                        <h2>Past Experience</h2>
                        <p dangerouslySetInnerHTML={{ __html: item.experienceDescription }} ></p>
                    </div>
                </div>
            </div>
            <hr className={`${styles.teamsdetailhr}`} />
            <Subscribe />
            <hr className={`${styles.teamsdetailhr}`} />
        </div>
    )
}
export default teamsdetail