/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react';
import Projects from '../../views/Projects.tsx';
import { MemoryRouter } from 'react-router-dom';

afterEach(cleanup)

describe('Rendering projects', () => {
	const setup = () => {
			const { getByRole, getAllByRole } = render(
			<MemoryRouter>
				<Projects />
			</MemoryRouter>
		);

		return {
			carousel: getByRole('region', { name: /carousel/i }),
			projectsHeading: getByRole('heading', { name: /PROJECTS/i }),
			cards: getAllByRole('article'),
			filterAuthors: queryByText('Authors'),
			filterLanguages: queryByText('Languages'),
		}
	}

	it('Renders everything', () => {
		const { carousel, projectsHeading, filterAuthors, filterLanguages } = setup();

		expect(carousel).toBeInTheDocument();
		expect(projectsHeading).toBeInTheDocument();
		expect(filterAuthors).toBeInTheDocument();
		expect(filterLanguages).toBeInTheDocument();
});

});