import { useEffect, useState } from "react";
import { Stack, Box, Typography, CircularProgress } from "@mui/material";
import { SideBar, Videos } from ".";
import { fetchFromAPI } from "../utility/FetchFromAPI";

export type videosProp = {
  id: any;
  kind: string;
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: string;
    publishedAt: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
    title: string;
  };
  statistics?: {
    subscriberCount: string;
  };
};

export const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [videos, setVideos] = useState<videosProp[]>([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);
  return (
    <Stack
      sx={{ overflowY: "auto", flexDirection: { xs: "column", md: "row" } }}
    >
      {/* Box One */}
      <Box
        sx={{
          px: 2,
          height: { sm: "auto", md: "93vh" },
          borderRight: "1px solid #3d3d3d",
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body1"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 Amr
        </Typography>
      </Box>

      {/* Box two */}

      <Box
        sx={{
          overflowY: "auto",
          height: "93vh",
          flex: 2,
          p: { xs: "5px 2px" },
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          px={2}
          my={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>

        {videos.length ? (
          <Videos videos={videos} />
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <CircularProgress />
          </Box>
        )}
      </Box>
    </Stack>
  );
};
