import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Total Reward Points', () => {
    render(<App />);
    const linkElement = screen.getByText(/Total Reward Points/i);
    expect(linkElement).toBeInTheDocument();
});
