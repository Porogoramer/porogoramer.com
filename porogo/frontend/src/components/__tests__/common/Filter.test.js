/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Filter from '../../common/Filter.tsx';

afterEach(cleanup)

describe('Rendering Filter', () => {
  const setup = ({ elements = [], label = '', selectedItems = [], onChangeHandler = jest.fn() } = {}) => {
    const { container, getByRole, queryAllByText, getAllByRole } = render(
      <MemoryRouter>
        <Filter
          elements={elements}
          label={label}
          selectedItems={selectedItems}
          onChangeHandler={onChangeHandler}
        />
      </MemoryRouter>
    );
  
    return {
      container,
      label: container.querySelector('label'),
      options: elements.map((element) =>
        queryAllByText((content, node) =>
          node.tagName.toLowerCase() === 'div' && content.trim() === element
        )[0]
      ),
      selectedItems: Array.from(container.querySelectorAll('.select__multi-value')),
      dropdown: getAllByRole('combobox')[0],
      onChangeHandler,
    };
  };

  it('renders the label', () => {
    const { label } = setup({ label: 'Filter by Category' });

    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('Filter by Category');
  });

  it('renders the selected items', () => {
    const { selectedItems } = setup({
      elements: ['JS', 'TS', 'Python'],
      selectedItems: ['JS', 'TS'],
    });
  
    expect(selectedItems).toHaveLength(2);

    expect(selectedItems[0]).toHaveTextContent('JS');
    expect(selectedItems[1]).toHaveTextContent('TS');
  });

  it('calls onChangeHandler with the correct v9alues when an item is selected', async () => {
    const onChangeHandler = jest.fn();
    const { dropdown, onChangeHandler: mockHandler } = setup({
      elements: ['JS', 'TS', 'Python'],
      onChangeHandler,
    });

    await userEvent.click(dropdown);
    const optionToSelect = document.querySelector('.select__option');
    await userEvent.click(optionToSelect);

    expect(mockHandler).toHaveBeenCalledWith(['js']);
  });

});