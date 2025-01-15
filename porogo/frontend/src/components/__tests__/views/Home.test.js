/**
 * @jest-environment jsdom
 */

import React from 'react';
import sinon from 'sinon';
import * as utils from '../../../utils';
import '@testing-library/jest-dom';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import Home from '../../views/Home.tsx';
import { MemoryRouter } from 'react-router-dom';

const MOCK_PORTFOLIO_JSON = {
    id: 1,
    name: 'Portfolio',
    short_description: 'A portfolio website made by friends',
    description_intro: 'The intro for a portfolio website',
    description_body: 'the body for a portfolio website',
    project_status: 'O',
    start_year: 2024,
    end_year: undefined,
    icon: {
        img: '/media/project/portfolio.png',
        desc: 'Portfolio icon',
        hover: '',
    },
    github_link: [ 'https://github.com/porogoramer/porogoramer.com' ],
    youtube_url: 'https://youtube.com/porogoramer',
    tags: ['Full Stack', 'Node', 'Django'],
    contributors: ['Axel', 'Emilie', 'Noah', 'Yaneric'],
    languages: ['TypeScript', 'Python'],
};

afterEach(cleanup)

describe('Rendering home', () => {
	beforeAll(() => {
		let stub = sinon.stub(utils, 'fetchData');
		stub.withArgs('project/portfolio').resolves(MOCK_PORTFOLIO_JSON);
		stub.withArgs('project/porobot').throws();
	});

	afterAll(() => utils.fetchData.restore())

	const setup = async () => {
		render(
			<MemoryRouter>
				<Home />
			</MemoryRouter>
		);
		
		return {
			welcomeHeading: screen.getByRole('heading', { name: /porogo/i }),
			projectsHeading: screen.getByRole('heading', { name: /PROJECTS/ }),
			cards: screen.getAllByRole('article'),
			learnMoreButtons: await screen.findAllByRole('link', { name: /learn more/i }),
			githubIcons: await screen.findAllByRole('link', { name: /github/i })
		}
	}

	it('Renders everything', async () => {
		await setup();
	});

	it('Renders two project cards', async () => {
		const { cards } = await setup();

		expect(cards.length).toBe(2);
	});

	it('Links to github.com', async () => {
		const { githubIcons } = await setup();

		expect(githubIcons.length).toEqual(1);
		expect(githubIcons[0]).toHaveAttribute('href', 'https://github.com/porogoramer/porogoramer.com')
	});

	it('Links to project', async () => {
		const { learnMoreButtons } = await setup();

		expect(learnMoreButtons.length).toEqual(1);
		expect(learnMoreButtons[0]).toHaveAttribute('href', '/project/portfolio');
	});

	it('Displays error card content', async () => {
		const { cards } = await setup();
		const errorCard = cards[0];
		
		expect(errorCard.querySelector('h2').textContent).toEqual('porobot');
		expect(errorCard.querySelector('p').textContent).toEqual('Failed to load card');
	});

	it('Displays project card content', async () => {
		const { cards } = await setup();
		const projectCard = cards[1];
		
		expect(projectCard.querySelector('h2').textContent).toEqual('Portfolio');
		expect(projectCard.querySelector('p').textContent).toEqual('A portfolio website made by friends');
	});
});