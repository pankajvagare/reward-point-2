import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Footer Text in the Footer', () => {
    render(<App />);
    const linkElement = screen.getByText(/Footer/i);
    expect(linkElement).toBeInTheDocument();
});
