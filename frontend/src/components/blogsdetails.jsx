import React, { useEffect, useState } from 'react'
import { format } from 'date-fns';
import styles from './blogsdetails.module.css';
import { useParams } from 'react-router-dom';
import { fetchBlogsById, fetchBlogsDatasById, fetchMemberById } from '../services/api';
import greenborder from '/greenborder.svg'
import backgroundpatter from '/backgroundpatter.svg'
import blogdetailicon from '/blogdetailicon.svg'
import blogwritericon from '/blogwritericon.svg'
import instagram from "/instagram.svg"
import facebook from "/facebook.svg"
import twitter from "/twitter.svg"
import linkedin from "/linkedin.svg"

function blogsdetails() {
    const { id } = useParams(); // Get the `id` from the URL
    const [item, setItem] = useState(null);
    const [member, setMember] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        const getCasePost = async () => {
            const items = await fetchBlogsById(id);
            setItem(items);
            const members = await fetchMemberById(items.memberId);
            setMember(members);
        };
        const getCasedetails = async () => {
            const details = await fetchBlogsDatasById(id);
            console.log(details)
            setData(details); // Set the filtered active items
        };
        getCasePost();
        getCasedetails();
    }, []);

    const renderBlogContent = (blog) => {
        switch (blog.type) {
            case "h1text":
                return <h1>{blog.content}</h1>;
            case "h2text":
                return <h2>{blog.content}</h2>;
            case "ptext":
                return <p>{blog.content}</p>;
            case "listtext":
                return <li>{blog.content}</li>;
            case "image":
                return <img src={import.meta.env.BASE_URL + blog.content} />;
            case "br":
                return <br />
            case "bannertext":
                return (
                    <div className={`${styles.casestudydetailscontentareabanner}`}>
                        <div className={`${styles.casestudydetailscontentareabannerimgs}`}>
                            <img className={`${styles.homeaboutcontentsplatterimg}`} src={backgroundpatter} />
                            <img className={`${styles.homeaboutcontentaboutimg}`} src={greenborder} />
                        </div>
                        <div className={`${styles.casestudydetailscontentareabannertextarea}`}>
                            <img src={blogdetailicon} />
                            <h3>{blog.content}</h3>
                        </div>
                    </div>

                );
        }
    };

    if (!item || !member || data.length === 0) {
        return <div>Loading...</div>;  // Show loading message while fetching the item
    }

    return (
        <div className={`${styles.casestudydetails}`}>

            <div className={`${styles.casestudydetailbanner}`}>
                <div className={`${styles.aboutbannertextareaoutside}`}>
                    <div className={`${styles.aboutbannertextareainside}`}>
                        <div className={`${styles.aboutbannertextareainsidetitle}`}>{format(new Date(item.creationDate), 'MMMM d, yyyy')}</div>
                        <h3>{item.title}</h3>
                    </div>
                </div>
            </div>

            <div className={`${styles.casestudydetailscontentarea}`}>
                {data.map(blog => (
                    <div key={blog.id}>{renderBlogContent(blog)}</div>
                ))}
            </div>

            <div className={`${styles.casestudydetailswriter}`}>
            <div className={`${styles.casestudydetailswriterarea}`}>
                <div className={`${styles.casestudydetailswritersplatterimg}`}><img className={`${styles.casestudydetailswritersplatter}`} src={backgroundpatter} /></div>
                <div className={`${styles.casestudydetailswriterarearow}`}>
                    <div className={`${styles.casestudydetailswriterimgs}`}>
                        <img className={`${styles.casestudydetailswriterimgsbackground}`} src={blogwritericon} />
                        <img className={`${styles.casestudydetailswriterimgsforeground}`} src={import.meta.env.BASE_URL + member.imagePath} />
                    </div>
                    <div className={`${styles.casestudydetailswriterimgsforegroundtextarea}`}>
                        <h3>{member.name}</h3>
                        <h4>{member.position}</h4>
                        <p>{member.ownDescription}</p>
                        <div className={`${styles.casestudydetailswriterimgsforegroundtextarearow}`}>
                            <a className={`${styles.aboutteamcontentcontainera}`} href={member.instagram}><img src={instagram} /></a>
                            <a className={`${styles.aboutteamcontentcontainera}`} href={member.facebook}><img src={facebook} /></a>
                            <a className={`${styles.aboutteamcontentcontainera}`} href={member.twitter}><img src={twitter} /></a>
                            <a className={`${styles.aboutteamcontentcontainera}`} href={member.linkedin}><img src={linkedin} /></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </div>
    )
}
export default blogsdetails