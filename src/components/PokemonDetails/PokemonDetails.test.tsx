import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PokemonDetails from './PokemonDetails';

describe('<PokemonDetails />', () => {
  test('it should mount', () => {
    render(<PokemonDetails />);
    
    const pokemonDetails = screen.getByTestId('PokemonDetails');

    expect(pokemonDetails).toBeInTheDocument();
  });
});