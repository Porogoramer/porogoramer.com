import React from 'react';
import '../../../static/styles/common/_filter.scss';
import Select from 'react-select';

function Filter({ elements, label, selectedItems, onChangeHandler }) {
    const options = elements.map((element) => ({
        value: element.toLowerCase(),
        label: element,
    }));

    return (
        <div className="filter-container">
            {label && <label className="filter-label">{label}</label>}
            <Select
                isMulti
                name="filters"
                options={options}
                value={selectedItems}
                onChange={onChangeHandler}
                className="basic-multi-select"
                classNamePrefix="select"
            />
        </div>
    );
}

export default Filter;
