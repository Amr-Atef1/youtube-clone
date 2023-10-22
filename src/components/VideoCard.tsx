import { videosProp } from "./Feed";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoChannelTitle,
  demoChannelUrl,
  demoProfilePicture,
  demoVideoTitle,
  demoVideoUrl,
} from "../utility/constants";
type videoDetailsProps = {
  videoDetail: videosProp;
};
export const VideoCard = ({ videoDetail:{id:{videoId},snippet}}: videoDetailsProps) => {
  return <Card sx={{width:{xs:"358px",md:'320px'},borderRadius:"none",border:"none",boxShadow:"none"}}>
  <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
    <CardMedia image={snippet?.thumbnails?.high?.url||demoProfilePicture}  sx={{width:"100%",height:180}}/>
  </Link>
  <CardContent sx={{backgroundColor:"#1e1e1e",height:106}}>
  <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
    <Typography  variant="subtitle1" fontWeight="bold" color='#fff'>
      {snippet?.title.slice(0,60) || demoVideoTitle}
    </Typography>
  </Link>
  <Link to={snippet.channelId?`/channel/${snippet.channelId}`:demoChannelUrl}>
    <Typography variant="subtitle2" fontWeight="bold" color='gray'>
      {snippet?.channelTitle.slice(0,60) || demoChannelTitle}
    <CheckCircle sx={{fontSize:"12px" ,ml:0.5}} />
    </Typography>
  </Link>
  </CardContent>
  </Card>;
};
