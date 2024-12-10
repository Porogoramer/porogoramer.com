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
});