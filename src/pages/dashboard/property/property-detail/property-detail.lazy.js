import React, { lazy, Suspense } from 'react';

const LazyPropertyDetail = lazy(() => import('./PropertyDetail'));

const PropertyDetail = props => (
  <Suspense fallback={null}>
    <LazyPropertyDetail {...props} />
  </Suspense>
);

export default PropertyDetail;
