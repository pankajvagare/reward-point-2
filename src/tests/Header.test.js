import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Home Link in Header', () => {
    render(<App />);
    const linkElement = screen.getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
});
