import { useState } from "react";
import axios from "axios";

function useComments(initialComments) {
  const [commentList, setCommentList] = useState(initialComments);

  const addComment = async (username, comment, videoId) => {
    try {
      const response = await axios.post(`https://gigih-final-project-backend-production.up.railway.app/videos/${videoId}/comment`, {
        username,
        comment,
      });
      const newComment = response.data;
      console.log(newComment);
      setCommentList([...commentList, newComment]);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return { commentList, addComment };
}

export default useComments;
