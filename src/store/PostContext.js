import React, { createContext } from "react";

export const postContext = createContext(null);

function Post([children]) {
  const [postContext, setPostContext] = useState();
  return <PostContext.Provider>{children}</PostContext.Provider>;
}

export default Post;
