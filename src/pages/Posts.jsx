import { useEffect, useState } from "react"
import * as React from 'react';
import Box from '@mui/material/Box';
import PostCard from "../components/PostCard";

const Posts = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data.slice(0, 10));
    }
    getPosts();
  }, [])

  return (
    <>
      <Box
        sx={{
          width: '80%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
          gap: 4,
          margin: "50px auto"
        }}
      >
        {
          posts.map((post) => (
            <PostCard key={post.id} id={post.id} title={post.title} body={post.body} />
          ))
        }
      </Box>
    </>
  )
}

export default Posts