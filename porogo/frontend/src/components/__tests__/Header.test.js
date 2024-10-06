/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import Header from '../Header.tsx';

afterEach(cleanup)

describe('Rendering header', () => {
	it('Renders header text', () => {
		render(<Header />);
		
		const header = screen.findByRole('heading', { name: /header/ });
		
		expect(header).toBeInTheDocument();
	});
});