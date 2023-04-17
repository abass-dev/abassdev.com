import { useState, useEffect } from "react";
import axios from "axios";
import { turncateText, dateToReadable } from "../Util";
import { getItemWithExpiration, setItemWithExpiration } from "../Cache";

export default function LatestPosts() {
  const [latestPosts, setLatestPosts] = useState(null);
  const latestPostsFormCache = getItemWithExpiration("latest_posts");

  useEffect(() => {
    if (latestPostsFormCache) {
      setLatestPosts(latestPostsFormCache);
    } else {
      axios
        .get(
          "https://blog.abassdev.com/index.php/wp-json/wp/v2/posts?_embed&per_page=3"
        )
        .then((response) => {
          setLatestPosts(response.data);
          setItemWithExpiration("latest_posts", response.data, 30);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-12 mb-4">
          <h1 className="primary-font text-center mb-4 primary-text">
            Recent posts
          </h1>
          <div className="list-group">
            {latestPosts ? (
              latestPosts.map((post) => {
                return (
                  <a
                    id="latestPosts"
                    href={post.link}
                    className="list-group-item list-group-item-action flex-column align-items-start"
                  >
                    <div className="ff-ubuntu w-100">
                      <h2 className="h4 mb-1">{post.title.rendered}</h2>
                      <small className="text-muted">
                        Published on: {dateToReadable(post.date)}
                      </small>
                      <br />
                      <small className="text-info">
                        Updated on: {dateToReadable(post.modified)}
                      </small>
                    </div>
                    <p
                      className="mt-3"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                      }}
                    ></p>
                  </a>
                );
              })
            ) : (
              <p className='text-danger'>The blog posts are not available yet due to some technical issues.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
