import React, { useEffect } from 'react';

const InArticle = () => {
  useEffect(() => {
    try {
      if (process.env.NODE_ENV !== 'development') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error('Ad loading failed', e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', textAlign: 'center' }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-6427962014782182"
      data-ad-slot="4978225125"
    />
  );
};

export default InArticle;
