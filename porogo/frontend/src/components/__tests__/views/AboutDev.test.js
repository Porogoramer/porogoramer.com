// /**
//  * @jest-environment jsdom
//  */

// import React from 'react';
// import sinon from 'sinon';
// import '@testing-library/jest-dom';
// import { render, screen, cleanup, act } from '@testing-library/react';
// import * as utils from '../../../utils'
// import AboutDev from '../../views/AboutDev.tsx';
// import { MemoryRouter, Route, Routes} from 'react-router-dom';

// const MOCK_PORTFOLIO_JSON = {
//     id: 1,
//     name: 'Portfolio',
//     short_description: 'A portfolio website made by friends',
//     description_intro: 'The intro for a portfolio website',
//     description_body: 'the body for a portfolio website',
//     project_status: 'O',
//     start_year: 2024,
//     end_year: undefined,
//     icon: {
//         img: '/media/project/portfolio.png',
//         desc: 'Portfolio icon',
//         hover: '',
//     },
//     github_link: [ 'https://github.com/porogoramer/porogoramer.com' ],
//     youtube_url: 'https://youtube.com/porogoramer',
//     tags: ['Full Stack', 'Node', 'Django'],
//     contributors: ['Axel', 'Emilie', 'Noah', 'Yaneric'],
//     languages: ['TypeScript', 'Python'],
// };

// const MOCK_DEV_JSON = {
// 	id: 1,
// 	featured_project: "portfolio",
// 	first_name: "noah",
// 	last_name: "gelinas",
// 	picture: {
// 		id: 6,
//     img: "/media/other/jayz.jpg",
//     desc: "chonky chonkkk",
//     hover: "chonker"
// 	},
// 	short_description: "short desc",
// 	description_experience: "exp desc",
// 	description_personal: "desc personal",
// 	linkedin_url: "https://www.linkedin.com/yaneric?_l=en_US",
// 	github_name: "https://github.com/yan2arb4",
// 	email: "noah@gmail.com"
// };

// afterEach(cleanup)

// describe('Rendering AboutDev', () => {

// 	let fetchDataStub;
// 	beforeAll(() => {
// 		fetchDataStub = sinon.stub(utils, "fetchData");
// 		fetchDataStub.withArgs('developer/noah').resolves(MOCK_DEV_JSON);
// 		fetchDataStub.withArgs('project/portfolio').resolves(MOCK_PORTFOLIO_JSON);
// 		fetchDataStub.withArgs('developer/rida').throws(); 
// 	});

// 	afterAll(() => {
//     	fetchDataStub.restore();
//   	});

// 	it('Renders header text', async () => {
// 		await act(async () => {
// 			render(
// 				<MemoryRouter initialEntries={['/about-dev/noah']}>
// 					<Routes>
// 						<Route path="/about-dev/:name" element={<AboutDev />} />
// 					</Routes>
// 				</MemoryRouter>
// 			);
// 		});
// 		const aboutdev = await screen.findByRole('heading', { name: /noah/i });
// 		const abouts = await screen.findAllByRole('heading', {name: /about/i});
// 		expect(aboutdev).toBeInTheDocument();
// 		abouts.forEach((about)=>{
// 			expect(about).toBeInTheDocument();
// 		})
// 	});

// 	it('Renders Icons', async () => {
// 		await act(async () => {
// 			render(
// 				<MemoryRouter initialEntries={['/about-dev/noah']}>
// 					<Routes>
// 						<Route path="/about-dev/:name" element={<AboutDev />} />
// 					</Routes>
// 				</MemoryRouter>
// 			);
// 		});
// 		const GithubLinks = await screen.findAllByRole('img', {name: /Github Logo/i});
// 		const LinkedInLink = await screen.findByRole('img', {name: /LinkedIn Logo/i});
// 		const EmailLink = await screen.findByRole('img', {name: /Email Logo/i});
// 		GithubLinks.forEach((link)=>{
// 			expect(link).toBeInTheDocument();
// 		})
// 		expect(LinkedInLink).toBeInTheDocument(); 
// 		expect(EmailLink).toBeInTheDocument(); 
// 	})

// 	it('Renders paragraphs', async () => {
// 		await act(async () => {
// 			render(
// 					<MemoryRouter initialEntries={['/about-dev/noah']}>
// 							<Routes>
//             		<Route path="/about-dev/:name" element={<AboutDev />} />
//           		</Routes>
// 					</MemoryRouter>
// 			);
// 		});
// 		const shortDesc = await screen.findByText('short desc');
// 		const expDesc = await screen.findByText('exp desc');
// 		const persDesc = await screen.findByText('desc personal');
// 		expect(shortDesc).toBeInTheDocument();
// 		expect(expDesc).toBeInTheDocument();
// 		expect(persDesc).toBeInTheDocument();
// 	})

// 	it('Renders pfp', async ()=>{
// 		await act(async () => {
// 			render(
// 					<MemoryRouter initialEntries={['/about-dev/noah']}>
// 							<Routes>
//             		<Route path="/about-dev/:name" element={<AboutDev />} />
//           		</Routes>
// 					</MemoryRouter>
// 			);
// 		});
// 		const pfp = await screen.findByRole('img', {name: /chonker/i});
// 		expect(pfp).toBeInTheDocument();
// 	})
// });