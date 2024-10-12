/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, cleanup, getByText } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import Footer from '../../common/Footer.tsx';

afterEach(cleanup)

describe('Rendering footer', () => {
	const setup = (entries = ['']) => {
		const { getByRole, getByText } = render(<MemoryRouter initialEntries={entries}>
            <Footer />
		</MemoryRouter>);

		return {
			homeLink: getByRole('link', { name: /porogo/i }),
			aboutLink: getByRole('link', { name: /about/i }),
			contactLink: getByRole('link', { name: /contact/i }),
			instagramLink: getByRole('link', { name: /instagram/i }),
			githubLink: getByRole('link', { name: /github/i }),
            copyright: getByText(/\u00A9/)
		};
	}

	it('links to root page', async () => {
		const { homeLink } = setup();

        expect(homeLink).toHaveAttribute('href', '/');
	});

    it('links to about page', async () => {
		const { aboutLink } = setup();

        expect(aboutLink).toHaveAttribute('href', '/about');
	});

    it('links to contact page', async () => {
		const { contactLink } = setup();

        expect(contactLink).toHaveAttribute('href', '/contact');
	});

    it('links to instagram.com', async () => {
		const { instagramLink } = setup();

        expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/porogoramers/');
	});

    it('links to github.com', async () => {
		const { githubLink } = setup();

        expect(githubLink).toHaveAttribute('href', 'https://github.com/Porogoramer');
	});
});