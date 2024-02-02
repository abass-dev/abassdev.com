interface API {
  REPO_INSPECTOR: string;
  AUTHORIZATION_KEY: string;
  BLOG_POSTS: string;
}

const API = {
  REPO_INSPECTOR: process.env.NEXT_PUBLIC_REPO_INSPECTOR,
  BLOG_POSTS: process.env.NEXT_PUBLIC_BLOG_POSTS,
  AUTHORIZATION_KEY: process.env.NEXT_PUBLIC_AUTHORIZATION_KEY,
};

export default API;
