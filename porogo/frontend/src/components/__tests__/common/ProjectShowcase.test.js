/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProjectShowcase from '../../common/ProjectShowcase.tsx';

afterEach(cleanup)

describe('Rendering Card', () => {
  const setup = ({ name = '', desc = '', date = '', backgroundImage = '' } = {}) => {
    const { getAllByText } = render(
    <MemoryRouter>
            <ProjectShowcase name={name} desc={desc} date={date} backgroundImage={backgroundImage} />
    </MemoryRouter>);

    return {
      name: getAllByText(name)[0],
      desc: getAllByText(desc)[0],
      date: getAllByText(date)[0],
    };
  };

  it('Renders the name, description and date on the page', () => {
    const {name, desc, date} = setup({name: "Rida project", desc: "Rida was here", date: "12/31/2024"});

    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent("Rida project");
    expect(desc).toBeInTheDocument();
    expect(desc).toHaveTextContent("Rida was here");
    expect(date).toBeInTheDocument();
    expect(date).toHaveTextContent("12/31/2024");

  });
});