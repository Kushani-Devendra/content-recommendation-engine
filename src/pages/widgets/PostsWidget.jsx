import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setPost } from "state";
import PostWidget from "./PostWidget";

const PostsWidget = ({ userId, isProfile = false }) => {
  //   const dispatch = useDispatch();
  //   const posts = useSelector((state) => state.posts);
  //   const token = useSelector((state) => state.token);

  //   const getPosts = async () => {
  //     const response = await fetch("https://localhost:30001/posts", {
  //       method: "GET",
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     const data = await response.json();
  //     dispatch(setPost({ posts: data }));
  //   };
  //   const getUserPosts = async () => {
  //     const response = await fetch(
  //       `https://localhost:30001/posts/${userId}/posts`,
  //       {
  //         method: "GET",
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );
  //     const data = await response.json();
  //     dispatch(setPost({ posts: data }));
  //   };

  //   useEffect(() => {
  //     if (isProfile) {
  //       getUserPosts();
  //     } else {
  //       getPosts();
  //     }
  //   }, []);

  return (
    <>
      {/* {posts.map(
        ({
          _id,
          usId,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }) => ( */}
      <PostWidget
        // key={_id}
        // postId={_id}
        // postUserId={userId}
        // name={`${firstName} ${lastName}`}
        // description={description}
        // location={location}
        // picturePath={picturePath}
        // userPicturePath={userPicturePath}
        // likes={likes}
        // comments={comments}
        key="01"
        postId="01"
        postUserId="01"
        name="Keily Ribbons"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Accusantium inventore porro quas quae ipsam cum commodi?"
        location="Canada"
        picturePath="../../assets/post5.jpeg"
        userPicturePath="../../assets/p3.jpeg"
        likes="32"
        comments="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Accusantium inventore porro quas quae ipsam cum commodi?"
      />
      {/* )
      )} */}
    </>
  );
};

export default PostsWidget;
