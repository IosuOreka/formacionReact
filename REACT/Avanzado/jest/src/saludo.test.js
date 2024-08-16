import React from 'react';
import Saludo from './components/ejercicio5/Saludo';
import { render } from '@testing-library/react';

test('Se renderizan bien las props de saludo', () => { 
    const { getByText } = render(<Saludo nombre={"Iosu"}/>);

    const texto = getByText(/Buenas Iosu!/i);

    expect(texto.textContent).toBe('Buenas Iosu!')
})


//Usando el elemento para capturar en lo renderizado y luego el toBeInTheDocument para verificar si está.

test('displays the greeting message with the provided name', () => {
    const { getByText } = render(<Saludo nombre="John" />);
    
    expect(getByText(/Buenas John!/i)).toBeInTheDocument();
});