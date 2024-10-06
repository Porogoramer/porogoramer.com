/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import Home from '../../views/Home.js';

afterEach(cleanup)

describe('Rendering home', () => {
	it('Renders header text', () => {
		render(<Home />);
		
		const home = screen.findByRole('heading', { name: /home/i });
		
		expect(home).toBeInTheDocument();
	});
});