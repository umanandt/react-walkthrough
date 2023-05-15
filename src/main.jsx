import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Posts, { loader as postsLoader } from "./routes/Posts";
import "./index.css";
import RootLayout from "./routes/RootLayout";
import NewPost, { action as submitAction } from "./routes/NewPost";
import PostDetails, { loader as PostDetailsLoader } from "./routes/PostDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: "/create-post", element: <NewPost />, action: submitAction },
          { path: "/:id", element: <PostDetails />, loader: PostDetailsLoader},
        ],
      },
      ,
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

//layout routes
