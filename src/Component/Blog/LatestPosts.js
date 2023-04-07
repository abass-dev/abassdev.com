import { useState, useEffect } from 'react';
import axios from 'axios';
import { turncateText, dateToReadable } from '../Util'

export default function LatestPosts() {
  const [latestPosts, setLatestPosts] = useState(null);

  useEffect(() => {
    axios.get('https://blog.abassdev.com/index.php/wp-json/wp/v2/posts?_embed&per_page=3')
      .then(response => {
        setLatestPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
 return (
   
    <div className='container'>
    <div className='row mb-4'>
      <div className='col-12 mb-4'> 
      <h1 className='primary-font primary-text'>Latest blog posts</h1>
       <p className="after-title"></p>
      <div className="list-group">
      {latestPosts?
        latestPosts.map((post) => {
        console.log(post);
         return (
          <a href={post.link} className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="ff-ubuntu w-100">
              <h2 className="h4 mb-1">{post.title.rendered}</h2>
              <small className="text-muted">Created on: {dateToReadable(post.date)}</small>
              <br />
              <small className="text-info">Updated on: {dateToReadable(post.modified)}</small>
            </div>
              <p className='mt-3' dangerouslySetInnerHTML={{ __html: post.excerpt.rendered}}></p>
          </a>
         )
        })
       :
       <p>Something went wrong, can't fetch latest posts!</p>
      }
      </div>
    </div>
    </div>
    </div>
  );
}
