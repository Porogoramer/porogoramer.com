/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import About from '../../views/About.tsx';

afterEach(cleanup)

describe('Rendering about', () => {
	it('Renders header text', () => {
		render(<About />);
		
		const about = screen.getByRole('heading', { name: /about/i });
		
		expect(about).toBeInTheDocument();
	});
});