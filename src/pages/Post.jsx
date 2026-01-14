import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

const Post = () => {
  const {id} = useParams();
  const [comments, setComments] = useState([]);

  useEffect(()=>{
    const getComments = async() => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
      const data = await response.json();
      setComments(data);
    }
    getComments();
  },[])


  return (
    <>
    <h1>Post {id}</h1>
    {comments.map(comment => (<PostCard key={comment.id} id={comment.id} title={comment.name} body={comment.body} />))}
    </>
  )
}

export default Post