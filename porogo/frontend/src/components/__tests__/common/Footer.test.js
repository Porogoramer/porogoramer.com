/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import Footer from '../../common/Footer.tsx';

afterEach(cleanup)

describe('Rendering footer', () => {
	it('Renders header text', () => {
		render(<Footer />);
		
		const footer = screen.getByRole('heading', { name: /footer/i });
		
		expect(footer).toBeInTheDocument();
	});
});