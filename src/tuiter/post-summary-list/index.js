import React from "react";
import PostSummaryItem
  from "./post-summary-item";
import who from "../who-to-follow-list"
import {useSelector} from "react-redux";

const PostSummaryList = () => {
  const postsArray = useSelector(state => state.tuits)

  return(
      <ul className="list-group">
        {
          postsArray.map(post =>
              <PostSummaryItem
                  key={who._id} post={post}/> )
        }
      </ul>
  );
};
export default PostSummaryList;