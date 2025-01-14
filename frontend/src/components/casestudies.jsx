import React, { useState, useEffect } from 'react'
import styles from './casestudies.module.css';
import { fetchCaseStudyItems, fetchCaseStudyCategories } from '../services/api';
import plusbutton from "/plusbutton.svg"
import { Link } from 'react-router-dom';

function casestudies() {
    const [blogs, setCasePosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]); // This will store the filtered posts
    const [selectedCategory, setSelectedCategory] = useState(0);

    useEffect(() => {
        const allCategory = { id: 0, categoryName: 'All', isActive: true };
        const getCategories = async () => {
            const category = await fetchCaseStudyCategories();
            setCategories([allCategory, ...category]);
        };
        const getCasePosts = async () => {
            const items = await fetchCaseStudyItems();
            setCasePosts(items); // Set the filtered active items
            setFilteredPosts(items);  // Show all posts when "All" is selected
        };
        getCategories();
        getCasePosts();
        setSelectedCategory(allCategory);
    }, []);

    useEffect(() => {
        if (selectedCategory.id === 0) {
            setFilteredPosts(blogs);
        } else {
            const filtered = blogs.filter(post => post.categoryId === selectedCategory.id);
            setFilteredPosts(filtered);
        }
    }, [selectedCategory, blogs]);  // Re-run filter when selectedCategory or posts change

    const handleCategorySelect = (category) => {
        setSelectedCategory(category); // Set selected category to filter posts
    };

    const groupIntoRows = (data, size) => {
        let result = [];
        for (let i = 0; i < data.length; i += size) { //0,4/1,5
            result.push(data.slice(i, i + size));
        }
        return result;
    };

    const rows = groupIntoRows(filteredPosts, 3);

    const getCategoryName = (categoryId) => {
        const category = categories.find((cat) => cat.id === categoryId);
        return category ? category.categoryName : 'Unknown';
    };

    if (blogs.length === 0 || categories.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className={`${styles.casestudies}`}>
            <div className={`${styles.categorybar}`}>
                {categories.map(category => (
                    <button
                        key={category.id}
                        className={category.id === selectedCategory?.id ? styles.active : ''}
                        onClick={() => handleCategorySelect(category)}>
                        {category.categoryName}</button>
                ))}
            </div>


            <div className={`${styles.homecasestudycontent}`}>
                {rows.map((row, index) => (
                    <div key={index} className={`${styles.homecasestudycontentinside}`}>
                        <div className={`${styles.homecasestudycontentrow}`}>
                            {row.map((casepost) => (
                                <div key={casepost.id} className={`${styles.homecasestudycontentcontainer}`} >
                                    <div className={`${styles.servicesbannercontent}`}>
                                        <div className={`${styles.overlay}`}>
                                            <Link to={`/casestudy/${casepost.id}`} key={casepost.id} className={`${styles.overlaybutton}`}><img src={plusbutton} /></Link>
                                            <h4>{casepost.title}</h4>
                                            <h5>{getCategoryName(casepost.categoryId)}</h5>
                                        </div>
                                        <img src={import.meta.env.BASE_URL + casepost.titleImage} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
export default casestudies
