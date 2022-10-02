import Posts from "./posts.controller";
import NotFound from "./404.controller";

const pages = {
  posts: Posts,
  notFound: NotFound,
};

export { pages };
