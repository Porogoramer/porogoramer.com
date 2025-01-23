import React from 'react';
import { ReactElement } from 'react';
import '../../../static/styles/common/_hamburger.scss';

/**
 * A hamburger menu that toggles the display of children
 * @param props React props
 * @param props.children List of React elements to be displayed when expanded as li s
 * @param props.white Whether to display the white element
 * @returns a hamburger menu with the given items
 */
export default function Hamburger({children, white = true}: {children: ReactElement[], white: boolean}) {

    return <div className='hamburger-container'>
        <img className='hamburger-icon' src={white ? '/static/assets/icons/hamburger-white.svg':'/static/assets/icons/hamburger.svg'} alt='hamburger icon' />
        <ul className='hamburger-items'>
            {children}
        </ul>
    </div>;
}