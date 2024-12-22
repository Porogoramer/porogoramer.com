import React from 'react';
import Select from 'react-select';
import '../../../static/styles/common/_filter.scss';

function Filter({ elements, label, selectedItems, onChangeHandler }) {
    const options = elements.map((element) => ({
        value: element.toLowerCase(),
        label: element,
    }));

    const handleChange = (selectedOptions) => {
        const selectedValues = selectedOptions ? selectedOptions.map((option) => option.value) : [];
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
                onChange={(e) => {
                    handleChange(e);
                }}
                className="basic-multi-select"
                classNamePrefix="select"
            />
        </div>
    );
}

export default Filter;
