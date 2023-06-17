import React, { lazy, Suspense } from 'react';

const LazyPokemonDetails = lazy(() => import('./PokemonDetails'));

const PokemonDetails = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPokemonDetails {...props} />
  </Suspense>
);

export default PokemonDetails;
