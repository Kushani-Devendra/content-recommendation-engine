import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import Navbar from "pages/navbar";
// import { useSelector } from "react-redux";
import UserWidget from "pages/widgets/UserWidget";
import MyPostWidget from "pages/widgets/MyPostWidget";
import PostsWidget from "pages/widgets/PostsWidget";
import AdvertWidget from "pages/widgets/RecommendationWidget";
import FriendListWidget from "pages/widgets/FriendListWidget";
import RecommendationWidget from "pages/widgets/RecommendationWidget";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  // const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId="01" picturePath="../../assets/p2.jpeg" />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath="../../assets/p2.jpeg" />
          <PostsWidget userId="01" />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="25%">
            <RecommendationWidget />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
