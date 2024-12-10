/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import AboutDev from '../../views/AboutDev.tsx';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup)

describe('Rendering AboutDev', () => {
	it('Renders header text', () => {
		render(<BrowserRouter>  
			<AboutDev />
		</BrowserRouter>);
		const aboutdev = screen.getByRole('heading', { name: /Noah/i });
		const abouts = screen.getAllByRole('heading', {name: /about/i});
		expect(aboutdev).toBeInTheDocument();
		abouts.forEach((about)=>{
			expect(about).toBeInTheDocument();
		})
	});

	it('Renders Icons', () => {
		render(<BrowserRouter>  
			<AboutDev />
		</BrowserRouter>);
		const GithubLinks = screen.getAllByRole('img', {name: /Github Logo/i});
		const LinkedInLink = screen.getByRole('img', {name: /LinkedIn Logo/i});
		const EmailLink = screen.getByRole('img', {name: /Email Logo/i});
		GithubLinks.forEach((link)=>{
			expect(link).toBeInTheDocument();
		})
		expect(LinkedInLink).toBeInTheDocument(); 
		expect(EmailLink).toBeInTheDocument(); 
	})

	it('Renders paragraphs', () => {
		render(<BrowserRouter>
			<AboutDev />
		</BrowserRouter>)
		const Paragraphs = screen.getAllByText('Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusamus quos quidem veniam sapiente corporis? Quidem porro fuga dolor amet soluta delectus atque aliquam obcaecati, vel consequuntur reprehenderit earum neque.');
		Paragraphs.forEach((p)=>{
			expect(p).toBeInTheDocument();
		})
	})

	it('Renders pfp', ()=>{
		render(<BrowserRouter>
			<AboutDev />
		</BrowserRouter>)
		const pfp = screen.getByRole('img', {name: /Profile Picture/i});
		expect(pfp).toBeInTheDocument();
	})
});