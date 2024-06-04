import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/NavBar';

const handleClick = jest.fn();

describe('Navbar component', () => {
  it('renders a navbar', () => {
    render(<Navbar isOpened={true} onNavbarIconClick={handleClick} />);

    const navbar = screen.getByTestId('navbar');

    expect(navbar).toBeInTheDocument();
  });
});
