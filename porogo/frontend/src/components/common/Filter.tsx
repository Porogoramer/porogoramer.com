import React from 'react';
import Select from 'react-select';
import '../../../static/styles/common/_filter.scss';

function Filter({ elements, label, selectedItems, onChangeHandler }: {elements: string[], label : string, selectedItems : string[], onChangeHandler: (updatedItems: string[]) => void;}) {


    const options = elements.map((element) => ({
        value: element.toLowerCase(),
        label: element,
    }));

    const handleChange = (
        selectedOptions: readonly { value: string; label: string }[]
    ) => {
        const selectedValues = selectedOptions.map((option) => option.value);
        onChangeHandler(selectedValues); 
    };

    const selectedOptions = selectedItems.map((item) => ({
        value: item,
        label: elements.find((element) => element.toLowerCase() === item)?.toString() || item,
    }));

    return (
        <div className="filter-container">
            {label && <label className="filter-label">{label}</label>}
            <Select
                isMulti
                name="filters"
                options={options}
                value={selectedOptions}
                onChange={handleChange}
                className="basic-multi-select"
                classNamePrefix="select"
            />
        </div>
    );
}

export default Filter;
