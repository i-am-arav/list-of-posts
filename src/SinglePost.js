import { useLocation } from "react-router-dom";

export default function SinglePost() {
  const location = useLocation();
  const { state: post } = location;
  console.log("location", location);
  return (
    <>
      {post ? (
        <div className="card">
          <div className="card-header">
            <img
              className="card-img-top"
              alt="image-pic"
              src="https://thumbs.dreamstime.com/z/paris-eiffel-tower-river-seine-sunset-france-one-most-iconic-landmarks-107376702.jpg"
            />
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h4>{post.id}</h4>
              <h6> User Id : {post.userId} </h6>
            </div>

            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
          </div>
        </div>
      ) : (
        <h4>No Data</h4>
      )}
    </>
  );
}
