/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import Dashboard from '../../views/Dashboard.js';

afterEach(cleanup)

describe('Rendering dashboard', () => {
	it('Renders dashboard text', () => {
		render(<Dashboard />);
		
		const dashboard = screen.findByRole('heading', { name: /dashboard/i });
		
		expect(dashboard).toBeInTheDocument();
	});
});