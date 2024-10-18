/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react';
import Project from '../../views/Project';
import { MemoryRouter } from 'react-router-dom';

afterEach(cleanup);

describe('Rendering Project component', () => {
    const setup = () => {
        const { getByRole, getAllByRole, getByAltText } = render(
            <MemoryRouter>
                <Project />
            </MemoryRouter>
        );

        return {
            projectTitle: getByRole('heading', { name: /Porobot/i }),
            projectDates: getByRole('heading', { name: /2023-present/i }),
            showcaseVideo: getByAltText('Showcase Video'),
            githubIcon: getByAltText('GitHub Logo'),
            discordIcon: getByAltText('Discord Logo'),
            languageIcons: getAllByRole('img', { name: '' }), // language icons don't have alt text
            aboutTitle: getByRole('heading', { name: /About the project/i }),
            aboutParagraphs: getAllByRole('paragraph')
        };
    };

    it('Renders everything', () => {
        setup();
    });

    it('Renders project title and dates', () => {
        const { projectTitle, projectDates } = setup();

        expect(projectTitle).toBeInTheDocument();
        expect(projectDates).toBeInTheDocument();
    });

    it('Renders showcase video and icons', () => {
        const { showcaseVideo, githubIcon, discordIcon } = setup();

        expect(showcaseVideo).toBeInTheDocument();
        expect(githubIcon).toBeInTheDocument();
        expect(discordIcon).toBeInTheDocument();
    });

    it('Renders language icons', () => {
        const { languageIcons } = setup();

        expect(languageIcons.length).toBe(3); // JavaScript, HTML, MySQL icons
    });

    it('Renders About section with paragraphs', () => {
        const { aboutTitle, aboutParagraphs } = setup();

        expect(aboutTitle).toBeInTheDocument();
        expect(aboutParagraphs.length).toBe(2);
    });
});
