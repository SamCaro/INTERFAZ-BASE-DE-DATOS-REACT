import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './login';
import { MemoryRouter } from 'react-router-dom';
import UseFetch from './useFetch';

describe('Login', () => {
  it('Renders the Login component', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const labelElement = screen.getByText(/Usuario/i);
    const labelTwoElement = screen.getByText(/Contraseña/i);
    const buttonElement = screen.getByText(/Ingresar/i);

    expect(labelElement).toBeInTheDocument();
    expect(labelTwoElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});

describe('UseFetch', () => {
    it('Should show a list of characters including Glenna Reichert', async () => {
        render(<UseFetch />);
        try {
            expect(screen.getByText('Glenna Reichert')).toBeInTheDocument();
        } catch (err) {
            return console.log(err);
        }
    }) 
})
