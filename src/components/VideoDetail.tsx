import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utility/FetchFromAPI";
import { CheckCircle } from "@mui/icons-material";
import {videosProp} from './Feed'
import { Videos } from ".";

type videoDetailProps = {
  id: string;
  kind: string;
  snippet: {
    categoryId: string;
    channelId: string;
    channelTitle: string;
    description: string;
    tags: [];
    thumbnails: {
      high: { url: string };
    };
    title: string;
  };
  statistics: { favriteCount: string; viewCount: string,likeCount:string };
};
const initialState = {
  id: "",
  kind: "",
  snippet: {
    categoryId: "",
    channelId: "",
    channelTitle: "",
    description: "",
    tags: [],
    thumbnails: {
      high: { url: "" },
    },
    title: "",
  },
  statistics: { favriteCount: "", viewCount: "",likeCount:"" },
};

export const VideoDetail = () => {
  const [videoDetails, setVideoDetails] = useState<videoDetailProps>(
    initialState as videoDetailProps
  );
  const [suggestedVideos,setSuggestedVideos]=useState([] as videosProp[])
  const {
    snippet: {
      title,
      channelId,
      channelTitle,
    },
    statistics: { viewCount,likeCount },
  } = videoDetails;
  console.log(videoDetails);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet&id=${id}`).then((data) => {
      setVideoDetails(data.items[0]);
    });
    fetchFromAPI(`search?relatedToVideoId=${id}&part=id,snippet&type=video`).then((data)=>{setSuggestedVideos(data.items)})
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }} display="flex">
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              className="react-player"
              controls
              url={`https://www.youtube.com/watch?v=${id}`}
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant="h6" color="#fff">
                  {channelTitle}
                  <CheckCircle sx={{fontSize:'12px',color:"gray",ml:"5px"}}/>
                </Typography>
              </Link>
            <Stack direction={"row"} gap={2}>
              <Typography variant="body1" color="#fff" sx={{opacity:0.7}}>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography variant="body1" color="#fff" sx={{opacity:0.7}}>
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
            </Stack>
          </Box>
        </Box>
        <Box minHeight={"95vh"} px={2} py={{xs:2,md:3}} flex={0.1}>
          <Videos direction="column" videos={suggestedVideos}/>
        </Box>
      </Stack>
    </Box>
  );
};
