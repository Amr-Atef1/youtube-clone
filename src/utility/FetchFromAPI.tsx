import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const API_KEY=import.meta.env.VITE_API_KEY

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key":API_KEY ,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI=async (url:string)=>{
  const {data}=await axios.get(`${BASE_URL}/${url}`,options)
  return data
}