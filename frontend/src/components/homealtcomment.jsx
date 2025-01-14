import React, { useState, useEffect } from 'react'
import styles from './homealtcomment.module.css';
import { fetchCommentItems, fetchClients } from '../services/api';
import commentbuttonicon from "/commentbuttonicon.svg"
import homealtcommentimg from "/homealtcomment.svg"
import homealtcommenticon from "/homealtcommenticon.svg"

function homealtcomment() {
    const [comments, setComments] = useState([]);
    const [members, setMembers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 3;

    useEffect(() => {
        const getComments = async () => {
            const items = await fetchCommentItems();
            setComments(items); // Set the filtered active items
        };
        const getMembers = async () => {
            const data = await fetchClients();
            setMembers(data); // Set the filtered active items
        };
        getComments();
        getMembers();
    }, []);

    const startIndex = (currentPage - 1) * pageSize;
    const currentPosts = comments.slice(startIndex, startIndex + pageSize);

    // Handlers for next and previous buttons
    const nextPage = () => {
        if ((currentPage * pageSize) >= comments.length) {
            // If on last page, reset to the first page
            setCurrentPage(1);
        } else {
            // Otherwise, go to the next page
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage === 1) {
            // If on the first page, go to the last page
            const lastPage = Math.ceil(comments.length / pageSize);
            setCurrentPage(lastPage);
        } else {
            // Otherwise, go to the previous page
            setCurrentPage(currentPage - 1);
        }
    };

    const getMember = (memberId) => {
        const member = members.find((cat) => cat.id === memberId);
        return member;
    };

    if (comments.length === 0 || members.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className={`${styles.homealtcomment}`}>
            <img className={`${styles.homealtcommentlogo}`} src={homealtcommentimg} />
            <div className={`${styles.homecommentcontent}`}>
                {currentPosts.map((currentPost) => (
                    <div key={currentPost.id} className={`${styles.homecasestudycontentoutside}`}>
                        <div className={`${styles.homecommentcontentprofile}`} >
                            <img src={import.meta.env.BASE_URL + getMember(currentPost.clientsId).imagePath} />
                            <div className={`${styles.homecommentcontentprofiletext}`}>
                                <div className={`${styles.homecommentcontentprofiletexth2}`}>{getMember(currentPost.clientsId).name}</div>
                                <div className={`${styles.homecommentcontentprofiletexttitle}`}>{getMember(currentPost.clientsId).position}</div>
                            </div>
                        </div>
                        <div className={`${styles.homecasestudycontentcommenticon}`}><img src={homealtcommenticon} /></div>
                        <div key={currentPost.id} className={`${styles.homecasestudycontentinside}`}>
                            <p className={`${styles.homecommentcontenttext}`} dangerouslySetInnerHTML={{ __html: '“' + currentPost.text + '”' }}></p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={`${styles.homecommentbuttons}`}>
                <div className={`${styles.homecommentcontentbuttonoutside}`}><button className={`${styles.homecommentcontentbutton1}`} onClick={() => prevPage()}><img className={`${styles.homecommentcontentbutton1img}`} src={commentbuttonicon} /></button> Prev</div>
                <div className={`${styles.homecommentcontentbuttonoutside2}`}><div>Next</div><button className={`${styles.homecommentcontentbutton1}`} onClick={() => nextPage()}><img src={commentbuttonicon} /></button></div>
            </div>
        </div>
    )
}
export default homealtcomment
