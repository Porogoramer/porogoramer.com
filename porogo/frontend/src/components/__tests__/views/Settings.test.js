/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import Settings from '../../views/Settings.tsx';

afterEach(cleanup)

describe('Rendering players', () => {
	it('Renders header text', () => {
		render(<Settings />);
		
		const settings = screen.getByRole('heading', { name: /settings/i });
		
		expect(settings).toBeInTheDocument();
	});
});