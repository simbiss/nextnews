import axios from 'axios';
import { Article } from '../models/article';

const API_KEY = '5e0f222023eb4d9380fea145a16a52ff'; 
const BASE_URL = 'https://newsapi.org/v2';

export const fetchNews = async (country: string, category: string, query: string): Promise<Article[]> => {
  const endpoint = `${BASE_URL}/top-headlines`;
  const params = {
    apiKey: API_KEY,
    country,
    category,
    q: query,
  };
  try {
    const response = await axios.get(endpoint, { params });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};