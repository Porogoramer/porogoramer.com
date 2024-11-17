import React from 'react';
import { useMultipleSelection, useSelect } from 'downshift';
import '../../../static/styles/common/_filter.scss';

function Filter({ elements, label }: { elements: string[], label: string }) {

    function getElementsFilter(selectedItems: string[]) {
        return function elementsFilter(el: string) {
            return selectedItems.indexOf(el) < 0;
        };
    }

    function MultipleSelect() {
        const {
            getSelectedItemProps,
            getDropdownProps,
            addSelectedItem,
            removeSelectedItem,
            selectedItems,
        } = useMultipleSelection();

        const items = elements.filter(getElementsFilter(selectedItems));

        const {
            isOpen,
            selectedItem,
            getToggleButtonProps,
            getLabelProps,
            getMenuProps,
            highlightedIndex,
            getItemProps,
        } = useSelect({
            selectedItem: null,
            defaultHighlightedIndex: 0,
            items,
            stateReducer: (state, actionAndChanges) => {
                const { changes, type } = actionAndChanges;
                switch (type) {
                case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
                case useSelect.stateChangeTypes.ToggleButtonKeyDownSpaceButton:
                case useSelect.stateChangeTypes.ItemClick:
                    return {
                        ...changes,
                        isOpen: true,
                        highlightedIndex: 0,
                    };
                }
                return changes;
            },
            onStateChange: ({ type, selectedItem: newSelectedItem }) => {
                switch (type) {
                case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
                case useSelect.stateChangeTypes.ToggleButtonKeyDownSpaceButton:
                case useSelect.stateChangeTypes.ItemClick:
                case useSelect.stateChangeTypes.ToggleButtonBlur:
                    if (newSelectedItem) {
                        addSelectedItem(newSelectedItem);
                    }
                    break;
                default:
                    break;
                }
            },
        });
        return (
            <div className="multiple-select-container">
                <div className="multiple-select">
                    <label className="multiple-select-label" {...getLabelProps()}>
                Pick some books:
                    </label>
                    <div className="selected-items-container">
                        {selectedItems.map(function renderSelectedItem(selectedItemForRender, index) {
                            return (
                                <span
                                    className="selected-item"
                                    key={`selected-item-${index}`}
                                    {...getSelectedItemProps({ selectedItem: selectedItemForRender, index })}
                                >
                                    {selectedItemForRender}
                                    <span
                                        className="remove-item"
                                        onClick={e => {
                                            e.stopPropagation();
                                            removeSelectedItem(selectedItemForRender);
                                        }}
                                    >
                        &#10005;
                                    </span>
                                </span>
                            );
                        })}
                        <div
                            className="dropdown-toggle"
                            {...getToggleButtonProps(getDropdownProps({ preventKeyAction: isOpen }))}
                        >
                            {label} &#8595;
                        </div>
                    </div>
                </div>
    
                <ul
                    className={`dropdown-menu ${!(isOpen && items.length) && 'hidden'}`}
                    {...getMenuProps()}
                >
                    {isOpen &&
                items.map((item, index) => (
                    <li
                        className={`${
                            highlightedIndex === index ? 'highlighted' : ''
                        } ${selectedItem === item ? 'selected-item-bold' : ''} dropdown-item`}
                        key={`${item}${index}`}
                        {...getItemProps({ item, index })}
                    >
                        <span>{item}</span>
                    </li>
                ))}
                </ul>
            </div>
        );
    }

    return <MultipleSelect />;
}

export default Filter;
