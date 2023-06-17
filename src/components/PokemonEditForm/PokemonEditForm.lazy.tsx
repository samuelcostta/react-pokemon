import React, { lazy, Suspense } from 'react';

const LazyPokemonEditForm = lazy(() => import('./PokemonEditForm'));

const PokemonEditForm = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPokemonEditForm {...props} />
  </Suspense>
);

export default PokemonEditForm;
