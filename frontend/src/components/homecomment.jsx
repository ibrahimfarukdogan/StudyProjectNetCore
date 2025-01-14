import React, { useState, useEffect } from 'react'
import styles from './homecomment.module.css';
import { fetchCommentItems, fetchClients } from '../services/api';
import commentbuttonicon from "/commentbuttonicon.svg"


function homecomment() {
  const [comments, setComments] = useState([]);
  const [members, setMembers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? comments.length - 1 : prevIndex - 1));
  };

  // Handle the next button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === comments.length - 1 ? 0 : prevIndex + 1));
  };
  const currentPost = comments[currentIndex];

  const getMember = (memberId) => {
    const member = members.find((cat) => cat.id === memberId);
    return member;
  };

  if (comments.length === 0 || members.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`${styles.homecomment}`}>
      <div className={`${styles.homecommentcontent}`}>
        <div className={`${styles.homecommentcontenttitle}`}>Client Feedback </div>
        <p className={`${styles.homecommentcontenttext}`} dangerouslySetInnerHTML={{ __html: '“' + currentPost.text + '”' }}></p>
        <div className={`${styles.homecommentcontentprofile}`} >
          <div className={`${styles.homecommentcontentbuttonoutside}`}><button className={`${styles.homecommentcontentbutton1}`} onClick={() => handlePrevious()}><img className={`${styles.homecommentcontentbutton1img}`} src={commentbuttonicon} /></button> Prev</div>
          <div className={`${styles.homecommentcontentprofileimg}`}> <img src={import.meta.env.BASE_URL + getMember(currentPost.clientsId).imagePath} /></div>
          <div className={`${styles.homecommentcontentbuttonoutside2}`}><div>Next</div><button className={`${styles.homecommentcontentbutton1}`} onClick={() => handleNext()}><img src={commentbuttonicon} /></button></div>
        </div>
        <div className={`${styles.homecommentcontentbottomh1}`}>{getMember(currentPost.clientsId).name}</div>
        <div className={`${styles.homecommentcontentbottomh2}`}>{getMember(currentPost.clientsId).position}</div>
      </div>
    </div>
  )
}
export default homecomment
