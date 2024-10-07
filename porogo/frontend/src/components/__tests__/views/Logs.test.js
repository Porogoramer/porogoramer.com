/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import Logs from '../../views/Logs.tsx';

afterEach(cleanup)

describe('Rendering logs', () => {
	it('Renders header text', () => {
		render(<Logs />);
		
		const logs = screen.getByRole('heading', { name: /logs/i });
		
		expect(logs).toBeInTheDocument();
	});
});