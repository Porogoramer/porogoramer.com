// /**
//  * @jest-environment jsdom
//  */

// import React from 'react';
// import '@testing-library/jest-dom';
// import { render, cleanup } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import Card from '../../common/Card.tsx';

// afterEach(cleanup)

// describe('Rendering Card', () => {
//   const setup = ({ languages = [], authors = [], title = '', date = '' } = {}) => {
//     const { getByRole, queryByText, getAllByText, queryAllByText } = render(<MemoryRouter>
//             <Card languages={languages} authors={authors} title={title} date={date}/>
//     </MemoryRouter>);

//     return {
//       title: getAllByText(title)[0],
//       date: getAllByText(date)[0],
//       authors: authors.map((author) => getAllByText(author)[0]),
//       tags: languages.map((language) =>
//         queryAllByText((content, element) => {
//           return element.tagName.toLowerCase() === 'span' && content.trim() === language;
//         })[0]
//       ),
//       extraLanguages: queryByText('...'),
//       githubLink: getByRole('link', { name: /github/i }),
//     };
//   };

//   it('renders the card title and date', () => {
//     const { title, date } = setup({ title: 'My Project', date: '2022-2023' });

//     expect(title).toBeInTheDocument();
//     expect(date).toBeInTheDocument();
//   });

//   it('renders provided authors', () => {
//     const { authors } = setup({ authors: ['Rida', 'Axel'] });

//     expect(authors).toHaveLength(2);
//     expect(authors[0]).toHaveTextContent('Rida');
//     expect(authors[1]).toHaveTextContent('Axel');
//   });

//   it('renders provided languages as tags', () => {
//     const { tags } = setup({ languages: ['JavaScript', 'TypeScript'] });
  
//     expect(tags).toHaveLength(2);
//     expect(tags[0]).toHaveTextContent('JavaScript');
//     expect(tags[1]).toHaveTextContent('TypeScript');
//   });

//   it('renders "..." for extra languages if there are more than 6', () => {
//     const { tags, extraLanguages } = setup({ languages: ['F#', 'JS', 'JAVA', 'PYTHON', 'C++', 'C#', 'HTML', 'CSS', 'Kotlin'] });
  
//     expect(tags).toHaveLength(9);
//     expect(tags[0]).toHaveTextContent('F#');
//     expect(tags[1]).toHaveTextContent('JS');
//     expect(tags[2]).toHaveTextContent('JAVA');
//     expect(tags[3]).toHaveTextContent('PYTHON');
//     expect(tags[4]).toHaveTextContent('C++');
//     expect(tags[5]).toHaveTextContent('C#');
//     expect(extraLanguages).toBeInTheDocument();
//   });

// });