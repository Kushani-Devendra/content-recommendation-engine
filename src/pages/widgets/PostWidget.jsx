import React, { useState } from "react";
import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import {
  Box,
  Chip,
  Divider,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
// import { useDispatch, useSelector } from "react-redux";
// import { setPost } from "state";

const PostWidget = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments,
}) => {
  //   const [isComments, setIsComments] = useState(false);
  //   const dispatch = useDispatch();
  //   const token = useSelector((state) => state.token);
  //   const loggedInUserId = useSelector((state) => state.user._id);
  //   const isLiked = Boolean(likes[loggedInUserId]);
  //   const likeCount = Object.keys(likes).length;

  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;
  const medium = palette.neutral.medium;

  //   const patchLike = async () => {
  //     const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ userId: loggedInUserId }),
  //     });
  //     const updatedPost = await response.json();
  //     dispatch(setPost({ post: updatedPost }));
  //   };
  return (
    <WidgetWrapper m="2rem 0">
      {picturePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: "0.75rem" }}
          // src={`http://localhost:3001/assets/${picturePath}`}
          src={picturePath}
        />
      )}

      <FlexBetween mt="0.5rem">
        <Typography color={main}>Big Buck Bunny</Typography>
        <Typography color={medium}>8:18</Typography>
      </FlexBetween>
      <Typography color={medium}>www.videolink.com</Typography>
      <FlexBetween>
        <Typography color={medium}>Blender Inc.</Typography>
        <Chip label="Blender" size="small" />
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default PostWidget;
