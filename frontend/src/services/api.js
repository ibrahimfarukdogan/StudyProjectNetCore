import axios from 'axios';

const URL = 'https://localhost:7128/api'; // Replace with your actual backend URL

export const fetchNavbarItems = async () => {
  try {
    const response = await axios.get(`${URL}/NavbarItems`);
    const data = response.data.filter(item => item.isActive);
    return data;
  } catch (error) {
    console.error(`Error fetching NavbarItems from ${URL}/NavbarItems:`, error);
    return []; // Return empty array on error
  }
};
export const fetchAlternativeMods = async (id) => {
  try {
    const response = await axios.get(`${URL}/AlternativeMods`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(`Error fetching AlternativeMods from ${URL}/AlternativeMods:`, error);
    return []; // Return empty array on error
  }
};
export const fetchAlternativeModById = async (id) => {
  try {
    const response = await axios.get(`${URL}/AlternativeMods/${id}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(`Error fetching AlternativeMods from ${URL}/AlternativeMods:`, error);
    return []; // Return empty array on error
  }
};
export const ToggleOppositeAlternativeModById = async (id) => {
  try {
    const response = await axios.patch(`${URL}/AlternativeMods/toggle/${id}`);
    const updatedMod = response.data;
    return updatedMod; // Return the updated mod data
  } catch (error) {
    console.error(`Error toggling mod value for id ${id}:`, error);
    throw new Error('Failed to toggle mod value'); // Throw error to be caught by the caller
  }
};
export const fetchServicesItems = async () => {
  try {
    const response = await axios.get(`${URL}/ServicesItems`);
    const data = response.data.filter(item => item.isDeleted==false);
    return data;
  } catch (error) {
    console.error(`Error fetching ServicesItems from ${URL}/ServicesItems:`, error);
    return []; // Return empty array on error
  }
};
export const fetchServicesItemsById = async (id) => {
  try {
    const response = await axios.get(`${URL}/ServicesItems/${id}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(`Error fetching ServicesItems from ${URL}/ServicesItems:`, error);
    return []; // Return empty array on error
  }
};
export const fetchServicesItemsDataById = async (id) => {
  try {
    const response = await axios.get(`${URL}/ServicesDatas`);
    const data = response.data.filter(item => item.servicesItemId==id);
    return data;
  } catch (error) {
    console.error(`Error fetching ServicesItems from ${URL}/ServicesItems:`, error);
    return []; // Return empty array on error
  }
};
export const fetchCaseStudyItems = async () => {
  try {
    const response = await axios.get(`${URL}/CaseStudyPostItems`); 
    const data = response.data.filter(item => item.isDeleted==false);
    return data;
  } catch (error) {
    console.error(`Error fetching CaseStudyPostItems from ${URL}/CaseStudyPostItems:`, error);
    return []; // Return empty array on error
  }
};
export const fetchCaseStudyItemsById = async (id) => {
  try {
    const response = await axios.get(`${URL}/CaseStudyPostItems/${id}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(`Error fetching CaseStudyPostItems from ${URL}/CaseStudyPostItems:`, error);
    return []; // Return empty array on error
  }
};
export const fetchCaseStudyCategories = async () => {
  try {
    const response = await axios.get(`${URL}/CaseStudyCategoryItems`); 
    const data = response.data.filter(item => item.isActive);
    return data;
  } catch (error) {
    console.error(`Error fetching CaseStudyCategoryItems from ${URL}/CaseStudyCategoryItems:`, error);
    return []; // Return empty array on error
  }
};
export const fetchCaseStudyCategoriesById = async (id) => {
  try {
    const response = await axios.get(`${URL}/CaseStudyCategoryItems/${id}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(`Error fetching CaseStudyCategoryItems from ${URL}/CaseStudyCategoryItems:`, error);
    return []; // Return empty array on error
  }
};
export const fetchCaseStudyDatasById = async (id) => {
  try {
    const response = await axios.get(`${URL}/CaseStudyPostDatas`);
    const data = response.data.filter(item => item.caseStudyPostItemId==id);
    return data;
  } catch (error) {
    console.error(`Error fetching CaseStudyPostDatas from ${URL}/CaseStudyPostDatas:`, error);
    return []; // Return empty array on error
  }
};
export const fetchCommentItems = async () => {
  try {
    const response = await axios.get(`${URL}/CommentItems`); 
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error(`Error fetching CommentItems from ${URL}/CommentItems:`, error);
    return []; // Return empty array on error
  }
};
export const fetchMembers = async () => {
  try {
    const response = await axios.get(`${URL}/Members`); 
    const data = response.data.filter(item => item.isDeleted==false);
    console.log(data);
    return data;
  } catch (error) {
    console.error(`Error fetching Members from ${URL}/Members:`, error);
    return []; // Return empty array on error
  }
};
export const fetchMemberById = async (id) => {
  try {
    const response = await axios.get(`${URL}/Members/${id}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(`Error fetching Members from ${URL}/Members:`, error);
    return []; // Return empty array on error
  }
};
export const postMembers = async (email, password) => {
  try {
    const response = await axios.post(`${URL}/members/login`, { email, password });
    console.log('Login successful:', response.data);
    localStorage.setItem('token', response.data.token); // Save the token to localStorage
    return response.data; // Return the response data
  } catch (error) {
    console.error('Error during login:', error.response ? error.response.data : error.message);
    throw new Error('Invalid email or password'); // Throw error to be caught by the caller
  }
};
export const fetchClients = async () => {
  try {
    const response = await axios.get(`${URL}/Clients`); 
    const data = response.data.filter(item => item.isDeleted==false);
    console.log(data);
    return data;
  } catch (error) {
    console.error(`Error fetching Clients from ${URL}/Clients:`, error);
    return []; // Return empty array on error
  }
};
export const fetchBlogs = async () => {
  try {
    const response = await axios.get(`${URL}/BlogItems`); 
    const data = response.data.filter(item => item.isDeleted==false);
    console.log(data);
    return data;
  } catch (error) {
    console.error(`Error fetching BlogItems from ${URL}/BlogItems:`, error);
    return []; // Return empty array on error
  }
};
export const fetchBlogsById = async (id) => {
  try {
    const response = await axios.get(`${URL}/BlogItems/${id}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(`Error fetching BlogItems from ${URL}/BlogItems:`, error);
    return []; // Return empty array on error
  }
};
export const fetchBlogsDatasById = async (id) => {
  try {
    const response = await axios.get(`${URL}/BlogDatas`);
    const data = response.data.filter(item => item.blogItemId==id);
    return data;
  } catch (error) {
    console.error(`Error fetching BlogDatas from ${URL}/BlogDatas:`, error);
    return []; // Return empty array on error
  }
};
export const fetchPrices = async () => {
  try {
    const response = await axios.get(`${URL}/PricingItems`); 
    const data = response.data.filter(item => item.isActive);
    console.log(data);
    return data;
  } catch (error) {
    console.error(`Error fetching PricingItems from ${URL}/PricingItems:`, error);
    return []; // Return empty array on error
  }
};