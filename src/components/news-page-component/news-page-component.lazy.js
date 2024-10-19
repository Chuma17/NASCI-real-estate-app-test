import React, { lazy, Suspense } from 'react';

const LazyNewsPageComponent = lazy(() => import('./NewsPageComponent'));

const NewsPageComponent = props => (
  <Suspense fallback={null}>
    <LazyNewsPageComponent {...props} />
  </Suspense>
);

export default NewsPageComponent;
