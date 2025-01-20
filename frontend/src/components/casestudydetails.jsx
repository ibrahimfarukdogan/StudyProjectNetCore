import React, { useEffect, useState } from 'react'
import { format } from 'date-fns';
import styles from './casestudydetails.module.css';
import { Link, useParams } from 'react-router-dom';
import { fetchCaseStudyItemsById, fetchCaseStudyDatasById, fetchCaseStudyCategoriesById } from '../services/api';

function casestudydetailbanner() {
    const { id } = useParams(); // Get the `id` from the URL
    const [item, setItem] = useState(null);
    const [category, setCategory] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        const getCasePost = async () => {
            const items = await fetchCaseStudyItemsById(id);
            setItem(items);
            const category = await fetchCaseStudyCategoriesById(items.categoryId);
            setCategory(category);
        };
        const getCasedetails = async () => {
            const details = await fetchCaseStudyDatasById(id);
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
        }
    };

    if (!item || !category || data.length === 0) {
        return <div>Loading...</div>;  // Show loading message while fetching the item
    }

    return (
        <div className={`${styles.casestudydetails}`}>
            <div className={`${styles.casestudydetailbanner}`}>
                <div className={`${styles.aboutbannertextareaoutside}`}>
                    <div className={`${styles.aboutbannertextareainside}`}>
                        <div className={`${styles.aboutbannertextareainsidetitle}`}>Case Studies single</div>
                        <h3>{item.title}</h3>
                    </div>
                </div>
            </div>
            <div className={`${styles.casestudydetailscontent}`}>
                <div className={`${styles.casestudydetailscontentimg}`}>
                    <div className={`${styles.casestudydetailstitleimg}`}><img src={import.meta.env.BASE_URL + item.titleImage} /></div>
                    <div className={`${styles.casestudydetailstitletab}`}>
                        <div className={`${styles.casestudydetailstitletabcolumn}`}>
                            <h4>Case Name</h4>
                            <h5>{item.title}</h5>
                        </div>
                        <div className={`${styles.casestudydetailstitletabcolumn}`}>
                            <h4>Category</h4>
                            <h5>{category.categoryName}</h5>
                        </div>
                        <div className={`${styles.casestudydetailstitletabcolumn}`}>
                            <h4>Date</h4>
                            <h5>{format(new Date(item.creationDate), 'd MMMM yyyy')}</h5>
                        </div>
                        <Link to={`/contact`} className={`${styles.casestudydetailstitletabLink}`}><button>Live Preview</button></Link>
                    </div>
                </div>
                <div className={`${styles.casestudydetailscontentarea}`}>
                    {data.map(blog => (
                        <div key={blog.id}>{renderBlogContent(blog)}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default casestudydetailbanner
