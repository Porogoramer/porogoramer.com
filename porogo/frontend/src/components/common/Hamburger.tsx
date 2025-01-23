import React, { useState, ReactElement } from 'react';
import '../../../static/styles/common/_hamburger.scss';

/**
 * A hamburger menu that toggles the display of children
 * @param props React props
 * @param props.children List of React elements to be displayed when expanded as li s
 * @param props.toggleExpandParent A callback to expand the size of the parent to fit the content
 * @param props.white Whether to display the white element
 * @returns a hamburger menu with the given items
 */
export default function Hamburger({children, toggleExpandParent, white = true}: {children: ReactElement[], toggleExpandParent: () => void, white: boolean}) {
    const [expanded, setExpanded] = useState(false);

    const expand = () => {
        setExpanded(b => !b);
        toggleExpandParent();
    };

    return <div className='hamburger-container'>
        <img className='hamburger-icon' src={white ? '/static/assets/icons/hamburger-white.svg':'/static/assets/icons/hamburger.svg'} alt='hamburger icon' onClick={expand} />
        <ul className={`hamburger-items ${expanded ? 'expanded': ''}`}>
            {children}
        </ul>
    </div>;
}