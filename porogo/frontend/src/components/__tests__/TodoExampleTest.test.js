/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, cleanup } from '@testing-library/react';
import TodoExample from "../TodoExample";
import userEvent from '@testing-library/user-event';

// Makes sure each test is isolated
afterEach(cleanup)

describe('TodoExample', () => {
    const setup = (todo = { name:'wash clothes', completed: false }) => {
        const container = render(<TodoExample todo={todo} />);
        
        return {
            container: container.container,
            checkbox: screen.getByRole('checkbox'),
            paragraph: screen.getByRole('paragraph'),
        }
    }

    it('Renders the component with correct props', () => {
        const { container, checkbox, paragraph} = setup();

        expect(container).not.toHaveClass('done')
        expect(checkbox).not.toBeChecked();
        expect(paragraph).toHaveTextContent(/wash clothes/);
    })

    it('Sets the className on container after clicked', async () => {
        const { container, checkbox, paragraph } = setup();
        const user = userEvent.setup();

        await user.click(checkbox);

        expect(checkbox).toBeChecked();
        expect(container).toHaveClass('done');
    })
})
    