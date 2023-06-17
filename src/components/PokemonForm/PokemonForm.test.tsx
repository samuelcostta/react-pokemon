import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PokemonForm from './PokemonForm';

describe('<PokemonForm />', () => {
  test('it should mount', () => {
    //render(<PokemonForm />);
    
    const pokemonForm = screen.getByTestId('PokemonForm');

    expect(pokemonForm).toBeInTheDocument();
  });
});