import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utility/FetchFromAPI";
import { Box } from "@mui/material";
import { ChannelCard, Videos } from ".";

import { videosProp } from "./Feed";
export const ChannelDetail = () => {
  const [channelVideos, setChannelVideos] = useState<videosProp[]>([]);
  const [channelDetail, setChannelDetail] = useState({} as videosProp);
  const { id } = useParams();

  console.log(channelVideos);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data.items[0]);
    });
    fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`).then(
      (data) => {
        setChannelVideos(data.items);
      }
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,212,255,1) 18%, rgba(124,108,255,1) 53%, rgba(255,0,254,1) 90%)",
            zIndex:3,
            height:300
            }}
        />
        <div className="absolute top-[30%] left-[50%] translate-x-[-50%]">
        <ChannelCard channelDetail={channelDetail}/>
        </div>
      </Box>
      <Box sx={{m:{sm:'300px 0 0 3rem',xs:"300px 0 0"}}}>
        <Videos videos={channelVideos}/>
      </Box>
    </Box>
  );
};
