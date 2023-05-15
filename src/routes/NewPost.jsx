import classes from "./NewPost.module.css";
import { useState } from "react";
import Modal from "../components/Modal";
import { Link, Form, redirect } from "react-router-dom";

function NewPost({ onAddPost }) {
  {
    /*const [enteredBody, setEnterBody] = useState("");
  const [enteredAuthor, setEnterAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnterBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnterAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onAddPost(postData);
    onCancel();
  }
*/
  }
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required name="body" rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required name="author" />
        </p>
        <p className={classes.actions}>
          <Link to="/" type="button">
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // { body: '...', author: '...' }
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
return redirect('/')
}
