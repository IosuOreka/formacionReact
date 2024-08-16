import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './components/ejercicio4/Counter';

test('el botón incrementa en una unidad el valor del contador', () => { 
    const { getByText } = render(<Counter />);

    const contador = getByText(/Contador: 0/i);
    const boton = getByText(/Sumar/i);

    fireEvent.click(boton);
    expect(contador.textContent).toBe('Contador: 1')
 })