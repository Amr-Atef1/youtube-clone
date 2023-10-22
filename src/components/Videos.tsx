import { ChannelCard, VideoCard } from '.';
import {videosProp} from './Feed'
import {Stack,Box} from '@mui/material'
 type VideosProps = {
  videos: videosProp[];
  direction?:"row" | "row-reverse" | "column" | "column-reverse";
};

export const Videos = ({videos,direction}:VideosProps) => {
  return (
    <Stack direction={direction||"row"} flexWrap="wrap" justifyContent={{xs:"center",md:"start"}} gap={2}>
      {videos.map((item,index)=>(
        <Box key={index}>
          {item.id.videoId && <VideoCard videoDetail={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
          {item.id.playlistId && <VideoCard videoDetail={item}/>}
        </Box>
      ))}
    </Stack>
  )
}
