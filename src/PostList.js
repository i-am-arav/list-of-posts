import React from "react";
import { Link } from "react-router-dom";

function PostList({ loading, posts = [] }) {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <ul className="list-group mb-4">
        {posts.map((post) => (
          <div
            key={post.id}
            onClick={() => {
              console.log("Clicked");
            }}
            className="cursor-pointer"
          >
            {post && (
              <Link
                to={`${post.id}`}
                state={post}
                key={post.id}
                className="list-group-item text-dark"
              >
                {post.title}{" "}
              </Link>
            )}
          </div>
        ))}
      </ul>
    </>
  );
}

export default PostList;
