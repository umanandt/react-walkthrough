import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostList.module.css";

//import { useEffect, useState } from "react";

const PostList = () => {
  const posts = useLoaderData();
  //const [posts, setPosts] = useState([]);
  //const [isFetching, setisFetching] = useState(false);

{ /* useEffect(() => {
    async function fetchPosts() {
    //  const response = await fetch("http://localhost:8080/posts");
    //  const resData = await response.json();
      setPosts(resData.posts);
    }

    fetchPosts();
  }, []);*/}


 {/* function addPostHandler(postData) {
  //  setisFetching(true);
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    //setisFetching(false);
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }*/}


  
  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} id={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet</h2>
          <p>Start adding some</p>
        </div>
      )}

   { /* {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading......</p>
        </div>
      )}*/}
    </>
  );
};

export default PostList;
