// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders HackLynx title', () => {
    render(<App />);
    const titleElement = screen.getByText(/HackLynx/i);
    expect(titleElement).toBeInTheDocument();
});
