import {useEffect,useState} from 'react';
import {  Box, Typography } from "@mui/material";
import {  Videos } from ".";
import { fetchFromAPI } from "../utility/FetchFromAPI";
import { useParams } from 'react-router-dom';

export type videosProp={
  id:any
  kind:string,
  snippet:{
    channelId:string,
    channelTitle:string,
    description:string,
    liveBroadcastContent:string,
    publishTime:string,
    publishedAt:string,
    thumbnails:{
      high:{
        url:string,
      }
    },
    title:string,
  }
  statistics?:{
    subscriberCount:string
  }
}


export const SearchFeed = () => {
  const [videos,setVideos]=useState<videosProp[]>([])
  const {searchTerm}=useParams()
  console.log(videos);
  
  useEffect(()=>{
 fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=>setVideos(data.items))
    
  },[searchTerm])
  return (
      <Box sx={{ overflowY: "auto", height: "93vh", flex: 2, p: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          Search Results for: <span style={{ color: "#F31503" }}>{searchTerm}</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
  );
};


