/**
 * @jest-environment jsdom
 */

import React from 'react';
import sinon from 'sinon';
import '@testing-library/jest-dom';
import { render, screen, cleanup, act } from '@testing-library/react';
import * as AboutDevModule from '../../views/AboutDev.tsx';
import { MemoryRouter, Route, Routes} from 'react-router-dom';

const MOCK_DEV_JSON = {
	id: 1,
	featured_project: "Portfolio",
	first_name: "noah",
	last_name: "gelinas",
	picture: {
		id: 6,
    img: "/media/other/jayz.jpg",
    desc: "chonky chonkkk",
    hover: "chonker"
	},
	short_description: "short desc",
	description_experience: "exp desc",
	description_personal: "desc personal",
	linkedin_url: "https://www.linkedin.com/yaneric?_l=en_US",
	github_name: "https://github.com/yan2arb4",
	email: "noah@gmail.com"
};

afterEach(cleanup)

describe('Rendering AboutDev', () => {

	let fetchDevInfoStub;
	beforeAll(() => {
		fetchDevInfoStub = sinon.stub(AboutDevModule, "fetchDevInfo");
    fetchDevInfoStub.withArgs('noah').resolves(MOCK_DEV_JSON);
    fetchDevInfoStub.withArgs('rida').throws(); 
	});

	afterAll(() => {
    fetchDevInfoStub.restore();
  });

	it('Renders header text', async () => {
		await act(async () => {
			render(
				<MemoryRouter initialEntries={['/about-dev/noah']}>
						<Routes>
            	<Route path="/about-dev/:name" element={<AboutDevModule.AboutDev />} />
          	</Routes>
				</MemoryRouter>
			);
		});
		const aboutdev = await screen.findByRole('heading', { name: /noah/i });
		const abouts = await screen.findAllByRole('heading', {name: /about/i});
		expect(aboutdev).toBeInTheDocument();
		abouts.forEach((about)=>{
			expect(about).toBeInTheDocument();
		})
	});

	it('Renders Icons', async () => {
		await act(async () => {
			render(
				<MemoryRouter initialEntries={['/about-dev/noah']}>
						<Routes>
            	<Route path="/about-dev/:name" element={<AboutDevModule.AboutDev />} />
          	</Routes>
				</MemoryRouter>
			);
		});
		const GithubLinks = await screen.findAllByRole('img', {name: /Github Logo/i});
		const LinkedInLink = await screen.findByRole('img', {name: /LinkedIn Logo/i});
		const EmailLink = await screen.findByRole('img', {name: /Email Logo/i});
		GithubLinks.forEach((link)=>{
			expect(link).toBeInTheDocument();
		})
		expect(LinkedInLink).toBeInTheDocument(); 
		expect(EmailLink).toBeInTheDocument(); 
	})

	it('Renders paragraphs', async () => {
		await act(async () => {
			render(
					<MemoryRouter initialEntries={['/about-dev/noah']}>
							<Routes>
            		<Route path="/about-dev/:name" element={<AboutDevModule.AboutDev />} />
          		</Routes>
					</MemoryRouter>
			);
		});
		const shortDesc = await screen.findByText('short desc');
		const expDesc = await screen.findByText('exp desc');
		const persDesc = await screen.findByText('desc personal');
		expect(shortDesc).toBeInTheDocument();
		expect(expDesc).toBeInTheDocument();
		expect(persDesc).toBeInTheDocument();
	})

	it('Renders pfp', async ()=>{
		await act(async () => {
			render(
					<MemoryRouter initialEntries={['/about-dev/noah']}>
							<Routes>
            		<Route path="/about-dev/:name" element={<AboutDevModule.AboutDev />} />
          		</Routes>
					</MemoryRouter>
			);
		});
		const pfp = await screen.findByRole('img', {name: /chonker/i});
		expect(pfp).toBeInTheDocument();
	})
});