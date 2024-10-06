/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import Header from '../../common/Header.tsx';

afterEach(cleanup)

describe('Rendering header', () => {
	it('Renders header text', () => {
		render(<Header />);
		
		const header = screen.getByRole('heading', { name: /header/i });
		
		expect(header).toBeInTheDocument();
	});
});