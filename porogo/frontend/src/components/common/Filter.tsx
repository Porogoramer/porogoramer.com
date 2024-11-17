import React, { useState, useMemo } from 'react';
import { useCombobox, useMultipleSelection  } from 'downshift';
import '../../../static/styles/common/_filter.scss';


function Filter( { elements, label } : {elements: string[], label: string}) {

    function getFilteredItems(selectedItems: string[], inputValue: string) {
        const lowerCasedInputValue = inputValue.toLowerCase();
      
        return elements.filter(
            (element) =>
                !selectedItems.includes(element) &&
            element.toLowerCase().startsWith(lowerCasedInputValue),
        );
    }

    const [inputValue, setInputValue] = useState('');
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const items = useMemo(
        () => getFilteredItems(selectedItems, inputValue),
        [selectedItems, inputValue],
    );
    const {
        getSelectedItemProps,
        getDropdownProps,
        removeSelectedItem,
    } = useMultipleSelection({
        selectedItems,
        onStateChange({selectedItems: newSelectedItems, type}) {
            switch (type) {
            case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownBackspace:
            case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete:
            case useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace:
            case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
                setSelectedItems(newSelectedItems || []);
                break;
            default:
                break;
            }
        },
    });
    const {
        isOpen,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        getInputProps,
        highlightedIndex,
        getItemProps,
    } = useCombobox({
        items,
        inputValue,
        selectedItem: null,
        stateReducer(state, actionAndChanges) {
            const {changes, type} = actionAndChanges;
  
            switch (type) {
            case useCombobox.stateChangeTypes.InputKeyDownEnter:
            case useCombobox.stateChangeTypes.ItemClick:
            case useCombobox.stateChangeTypes.InputBlur:
                return {
                    ...changes,
                    ...(changes.selectedItem && {isOpen: true, highlightedIndex: 0}),
                };
            default:
                return changes;
            }
        },
        onStateChange({
            inputValue: newInputValue,
            type,
            selectedItem: newSelectedItem,
        }) {
            switch (type) {
            case useCombobox.stateChangeTypes.InputKeyDownEnter:
            case useCombobox.stateChangeTypes.ItemClick:
                if (newSelectedItem && typeof newSelectedItem === 'string') {
                    setSelectedItems([...selectedItems, newSelectedItem]);
                }
  
                break;
            case useCombobox.stateChangeTypes.InputChange:
                setInputValue(newInputValue || '');
                break;
            default:
                break;
            }
        },
    });

    return <>
        <label {...getLabelProps()}>{label}:</label>
        <div>
            {selectedItems.map((selectedItem, index) => (
                <span
                    key={`selected-item-${index}`}
                    {...getSelectedItemProps({selectedItem, index})}
                >
                    {selectedItem}
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            removeSelectedItem(selectedItem);
                        }}
                        className="remove-btn"
                    >
        &#10005;
                    </button>
                </span>
            ))}
            <div>
                <input
                    {...getInputProps(getDropdownProps({preventKeyAction: isOpen}))}
                />
                <button {...getToggleButtonProps()} aria-label={'toggle menu'}>
            &#8595;
                </button>
            </div>
        </div>
        <ul {...getMenuProps()}>
            {isOpen &&
          items.map((item, index) => (
              <li
                  style={
                      highlightedIndex === index ? {backgroundColor: '#bde4ff'} : {}
                  }
                  key={`${item}${index}`}
                  {...getItemProps({item, index})}
              >
                  {item}
              </li>
          ))}
        </ul>  
    </>;
}

export default Filter;