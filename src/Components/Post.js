import React from "react";
import PropTypes from "prop-types";
import { FlexboxGrid, Avatar } from "rsuite";

const styleCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "60px",
};

const Post = ({ post }) => {
  //   console.log(post);
  const { title, permalink, thumbnail } = post;
  return (
    <FlexboxGrid>
      <FlexboxGrid.Item colspan={2} style={styleCenter}>
        <Avatar src={thumbnail} alt={title} />
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={8}>
        <a href={`https://reddit.com/${permalink}`} target="_blank">
          {title}
        </a>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
