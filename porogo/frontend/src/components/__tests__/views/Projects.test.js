/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import Projects from '../../views/Projects.tsx';

afterEach(cleanup)

describe('Rendering projects', () => {
	it('Renders header text', () => {
		render(<Projects />);
		
		const projects = screen.getByRole('heading', { name: /projects/i });
		
		expect(projects).toBeInTheDocument();
	});
});