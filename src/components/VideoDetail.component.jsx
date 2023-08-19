// VideoDetailComponent.js
import React, { useState } from "react";
import useComments from "../hooks/useComments.jsx";
import useCurrencyFormatter from "../hooks/useCurrencyFormatter.jsx";

function VideoDetailComponent({ video }) {
  const [videoDetail, productDetail, comments] = video;
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  //custom hooks
  const { commentList, addComment } = useComments(comments);
  const { formatCurrency } = useCurrencyFormatter();

  const handleSubmitComment = async () => {
    // Panggil fungsi addComment dari custom hook dengan tiga argumen
    await addComment(username, comment, videoDetail[0]._id);

    // Clear input fields
    setUsername("");
    setComment("");
  };

  return (
    <div className="detail-container">
      <div className="products-container">
        {/* Detail Produk */}
        {/* <h3>Product Detail</h3> */}
        {productDetail.map((product) => (
          <div className="product-detail" key={product._id}>
            <h4>{product.title}</h4>
            <p>Price: {formatCurrency(product.price)}.</p>
            <a
              href={product.link_product}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Now 🛒
            </a>
          </div>
        ))}
      </div>

      <div className="video-detail">
        {/* Detail Video */}
        <div
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.youtube.com/embed/${videoDetail[0].url_video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
          }}
        />
        <h3>{videoDetail[0].title}</h3>
      </div>

      <div className="comment-area">
        <div className="comments">
          {/* Komentar */}
          <h3>Comments</h3>
          {commentList.map((comment) => (
            <div className="comment-box" key={comment._id}>
              <h4>{`@${comment.username}`}</h4>
              <p>{comment.comment}</p>
              <p className="comment-timestamp" >
              {new Date(comment.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
        <div className="comment-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button onClick={handleSubmitComment}>Submit Comment</button>
        </div>
      </div>
    </div>
  );
}

export default VideoDetailComponent;