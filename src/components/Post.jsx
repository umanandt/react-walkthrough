import classes from "./Post.module.css";
import { Link } from "react-router-dom";

function Post({id, author, body}) {
  // const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <div className={classes.post}>
      <Link to={id}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </Link>
    </div>
  );
}

export default Post;
