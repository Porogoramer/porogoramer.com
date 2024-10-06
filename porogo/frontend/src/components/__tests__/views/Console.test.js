/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import Console from '../Console.tsx';

afterEach(cleanup)

describe('Rendering console', () => {
	it('Renders header text', () => {
		render(<Console />);
		
		const cons = screen.findByRole('heading', { name: /console/i });
		
		expect(cons).toBeInTheDocument();
	});
});