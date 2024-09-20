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
        render(<TodoExample todo={todo} />);
        
        return {
            checkbox: screen.getByRole('checkbox'),
            paragraph: screen.getByRole('paragraph'),
        }
    }

    it('Renders the component with correct props when completed', () => {
        const { checkbox, paragraph} = setup();

        expect(checkbox).not.toBeChecked();
        expect(paragraph).toHaveTextContent(/wash clothes/);
        expect(paragraph).not.toHaveClass('done');
    });

    it('Renders the component with correct props when not completed', () => {
        const { checkbox, paragraph} = setup({ name: 'wash clothes', completed: true });

        expect(checkbox).toBeChecked();
        expect(paragraph).toHaveClass('done');
    });

    it('Sets the className on container after clicked', async () => {
        const { checkbox, paragraph } = setup();
        const user = userEvent.setup();

        await user.click(checkbox);

        expect(checkbox).toBeChecked();
        expect(paragraph).toHaveClass('done');
    });
})
    