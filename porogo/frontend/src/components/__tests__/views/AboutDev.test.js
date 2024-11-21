/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import AboutDev from '../../views/AboutDev.tsx';

afterEach(cleanup)

describe('Rendering AboutDev', () => {
	it('Renders header text', () => {
		render(<AboutDev />);
		
		const aboutdev = screen.getByRole('heading', { name: /Noah/i });
		const about = screen.getByRole('heading', {name: /about/i});
		expect(aboutdev).toBeInTheDocument();
    expect(about).toBeInTheDocument
	});
});