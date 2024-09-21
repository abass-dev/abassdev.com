import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const BlogCell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.readMore} alt={data.title}>{data.title}</a></h3>
        <time className="published">
          {dayjs(data.date).format('MMMM, YYYY')}
          {data.author && (
            <>
              {' | '}
              <small>
                Author: {data.author}
              </small>
            </>
          )}
        </time>
      </header>
      {data.image && (
      <a href={data.link} className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a>
      )}
      <div className="description">
        <p>{data.desc} {' '} <a title={data.title} alt={data.readMore} style={{ color: '#1d65c3' }} href={data.readMore}>[...]</a></p>
      </div>
    </article>
  </div>
);

BlogCell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.string,
    readMore: PropTypes.string,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogCell;
