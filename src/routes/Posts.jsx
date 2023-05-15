import PostList from "../components/PostList";
import { Outlet } from "react-router-dom";

function Posts() {
  // const [modalIsVisible, setModalIsVisible] = useState(false);

  {
    /*function hideModalHandler() {
    setModalIsVisible(false);
  }

  function showModalHandler() {
    setModalIsVisible(true);
  }*/
  } // outlet means  PostList will show in background
  // create post means new post form will show abouve of it

  
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}
export default Posts;
// vit project want jsx not js
// we use js with create react app
// when we create proejwct with vite
// then we name files with JSX extension

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}
