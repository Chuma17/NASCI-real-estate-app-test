import React, { lazy, Suspense } from 'react';

const LazyNewsNewsDetail = lazy(() => import('./NewsNewsDetail'));

const NewsNewsDetail = props => (
  <Suspense fallback={null}>
    <LazyNewsNewsDetail {...props} />
  </Suspense>
);

export default NewsNewsDetail;
