/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import Players from '../../views/Players.tsx';

afterEach(cleanup)

describe('Rendering players', () => {
	it('Renders header text', () => {
		render(<Players />);
		
		const home = screen.getByRole('heading', { name: /players/i });
		
		expect(home).toBeInTheDocument();
	});
});