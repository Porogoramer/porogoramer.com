/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import Contact from '../Contact.tsx';

afterEach(cleanup)

describe('Rendering contact', () => {
	it('Renders header text', () => {
		render(<Contact />);
		
		const contact = screen.findByRole('heading', { name: /contact/i });
		
		expect(contact).toBeInTheDocument();
	});
});