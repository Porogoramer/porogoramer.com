/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react';
import Home from '../../views/Home.tsx';
import { MemoryRouter } from 'react-router-dom';

afterEach(cleanup)

describe('Rendering home', () => {
	const setup = () => {
		const { getByRole, getAllByRole } = render(
		<MemoryRouter>
			<Home />
		</MemoryRouter>
	);
	
		return {
			welcomeHeading: getByRole('heading', { name: /porogo/i }),
			projectsHeading: getByRole('heading', { name: /PROJECTS/ }),
			cards: getAllByRole('article'),
			learnMoreButtons: getAllByRole('link', { name: /learn more/i }),
			githubIcons: getAllByRole('link', { name: /github/i })
		}
	}

	it('Renders everything', () => {
		setup();
	});

	it('Renders two project cards', () => {
		const { cards } = setup();

		expect(cards.length).toBe(2);
	});

	it('Links to github.com', () => {
		const { githubIcons } = setup();

		for (const icon of githubIcons) {
			expect(icon).toHaveAttribute('href', 'https://github.com')
		}
	});

	it('Links to project', () => {
		const { learnMoreButtons } = setup();

		expect(learnMoreButtons[0]).toHaveAttribute('href', '/project/Important Dog');
		expect(learnMoreButtons[1]).toHaveAttribute('href', '/project/Portfolio Site');
	});
});