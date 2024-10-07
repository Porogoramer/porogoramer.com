/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import Home from '../../views/Home.tsx';

afterEach(cleanup)

describe('Rendering home', () => {
	it('Renders header text', () => {
		render(<Home />);
		
		const home = screen.getByRole('heading', { name: /home/i });
		
		expect(home).toBeInTheDocument();
	});
});