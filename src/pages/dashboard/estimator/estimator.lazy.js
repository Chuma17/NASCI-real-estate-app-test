import React, { lazy, Suspense } from 'react';

const LazyEstimator = lazy(() => import('./Estimator'));

const Estimator = props => (
  <Suspense fallback={null}>
    <LazyEstimator {...props} />
  </Suspense>
);

export default Estimator;
