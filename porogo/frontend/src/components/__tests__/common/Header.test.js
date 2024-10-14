/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Header from '../../common/Header.tsx';
import { MemoryRouter } from 'react-router-dom';

afterEach(cleanup)

describe('Rendering header', () => {
	const SELECTED_PAGE = 'curr-page';
	const setup = (entries = ['']) => {
		const { getByRole, getByText } = render(<MemoryRouter initialEntries={entries}>
			<Header />
		</MemoryRouter>);

		const user = userEvent.setup();

		return {
			user: user,
			porogoLogo: getByRole('img', { name: /porogo/i }),
			homeLink: getByText(/porogo/i),
			aboutLink: getByRole('link', { name: /about/i }),
			projectsLink: getByRole('link', { name: /projects/i }),
			porobotLink: getByRole('link', { name: /porobot/i }),
			contactLink: getByRole('link', { name: /contact/i }),
			themeLink: getByRole('img', { name: /mode/i }),
			frenchLink: getByRole('link', { name: /fr/i }),
			englishLink: getByRole('link', { name: /en/i }),
		};
	}

	it('Applies class to home on first render', () => {
		const { homeLink } = setup();
		
		expect(homeLink).toHaveClass(SELECTED_PAGE);
	});

	it('Navigates to about page', async () => {
		const { user, aboutLink, homeLink } = setup();
		
		await user.click(aboutLink);

		expect(aboutLink).toHaveClass(SELECTED_PAGE);
		expect(homeLink).not.toHaveClass(SELECTED_PAGE);
	});

	it('Navigates to projects page', async () => {
		const { user, projectsLink, homeLink } = setup();
		
		await user.click(projectsLink);

		expect(projectsLink).toHaveClass(SELECTED_PAGE);
		expect(homeLink).not.toHaveClass(SELECTED_PAGE);
	});

	// TODO Enable test when project/:name is implmented
	// it('Navigates to porobot page', async () => {
	// 	const { user, porobotLink, homeLink } = setup();
		
	// 	await user.click(porobotLink);

	// 	expect(porobotLink).toHaveClass(SELECTED_PAGE);
	// 	expect(homeLink).not.toHaveClass(SELECTED_PAGE);
	// });

	it('Navigates to contact page', async () => {
		const { user, contactLink, homeLink } = setup();
		
		await user.click(contactLink);

		expect(contactLink).toHaveClass(SELECTED_PAGE);
		expect(homeLink).not.toHaveClass(SELECTED_PAGE);
	});
});