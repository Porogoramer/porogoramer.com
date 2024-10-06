/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import Logs from '../../views/Logs.js';

afterEach(cleanup)

describe('Rendering logs', () => {
	it('Renders header text', () => {
		render(<Logs />);
		
		const logs = screen.findByRole('heading', { name: /logs/i });
		
		expect(logs).toBeInTheDocument();
	});
});