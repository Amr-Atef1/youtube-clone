import { videosProp } from "./Feed";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoChannelTitle, demoChannelUrl, demoProfilePicture } from "../utility/constants";


type channelDetailsProps = {
  channelDetail: videosProp;
};

export const ChannelCard = ({
  channelDetail: { id,snippet,statistics },
}: channelDetailsProps) => {
  return (
    <Box sx={{ borderRadius: "20px", boxShadow: "none" ,width:{xs:354,md:320}}}>
      <Link to={`/channel/${id?.channelId}`||demoChannelUrl}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            image={snippet?.thumbnails?.high?.url || demoProfilePicture}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6" color={"white"}>
            {snippet?.title || demoChannelTitle}
            <CheckCircle sx={{fontSize:"15px" ,ml:0.5,color:"gray"}} />
          </Typography>
          {statistics?.subscriberCount&&(
            <Typography sx={{color:'white'}}>
              {parseInt(statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};
