import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PokemonEditForm from './PokemonEditForm';

describe('<PokemonEditForm />', () => {
  test('it should mount', () => {
    render(<PokemonEditForm />);
    
    const pokemonEditForm = screen.getByTestId('PokemonEditForm');

    expect(pokemonEditForm).toBeInTheDocument();
  });
});