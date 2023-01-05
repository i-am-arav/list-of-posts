import PostList from "./PostList";
import "./styles.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

export default function Wrapper() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const [searchResult, setSearchResult] = useState([]);

  const debounce = (func) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, 1000);
    };
  };

  const searchByTitle = (searchQuery) => {
    console.log("watch delay");
    const res = posts.filter(
      function (post) {
        if (this.count <= 10 && post.title.includes(searchQuery)) {
          this.count++;
          return true;
        }
        return false;
      },
      { count: 0 }
    );
    setSearchResult(res);
  };

  const debounceSearch = debounce((text) => {
    searchByTitle(text);
  });

  const fetchAllPost = async () => {
    setLoading(true);
    const allPost = await (
      await fetch("https://jsonplaceholder.typicode.com/posts")
    ).json();
    setPosts(allPost);
    setLoading(false);
  };

  useEffect(() => {
    fetchAllPost();
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div className="container mt-5">
      <input
        className=" form-control mb-2"
        placeholder="Search by Title"
        onChange={(e) => debounceSearch(e.target.value)}
      />
      {searchResult?.length > 0 && (
        <div className="card">
          {searchResult.map((el) => (
            <Link
              to={`${el.id}`}
              state={el}
              key={el.id}
              className="list-group-item text-dark"
            >
              {el.title}
            </Link>
          ))}{" "}
        </div>
      )}
      <div className="text-primary my-3 ml-2">My Posts </div>
      <PostList loading={loading} posts={currentPosts} />
      <Pagination
        paginate={paginate}
        totalPosts={posts.length}
        postPerPage={postPerPage}
      />
    </div>
  );
}
