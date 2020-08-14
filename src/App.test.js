import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders App without crashing', () => {
	render(<App />);
});

test('First name is rendering', () => {
	const { getByText } = render(<App />);
	const firstName = getByText('First Name*');
	expect(firstName.textContent).toBe('First Name*');
});

test('Last name is rendering', () => {
	const { getByTestId } = render(<App />);
	const lastName = getByTestId('last-name');
	expect(lastName.textContent).toBe('Last Name*');
});
