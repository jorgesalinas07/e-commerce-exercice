import { useContext } from 'react';
import { SearchContext } from '../../../contexts/SearchContext'
import PropTypes from 'prop-types';
import './TypeFilter.css'

function TypeFilter ({name, options}) {
    const {
        categoryFilters,
        setCategoryFilters,
    } = useContext(SearchContext);

    const handleInputChange = (filter) => {
        const isOptionChecked = categoryFilters.includes(filter)

        setCategoryFilters((checkedFilters) => {
            if (isOptionChecked) {
                return (
                    checkedFilters.filter((
                        checkedFilter =>
                            checkedFilter !== filter
                    ))
                )
            }
            return [...checkedFilters, filter]
        })
    };

    return (
        <div className='TypeFilterContainer'>
            <h2>{name}:</h2>
            {options.map((option, id) =>
                <div key={id} className='CheckBox'>
                    <input
                        type="checkbox"
                        id={option.id}
                        name={option.label}
                        onChange={() => handleInputChange(option.id)}
                    />
                    <label htmlFor={option.id}>{option.label}</label>
                </div>
            )}
        </div>
    )
}

TypeFilter.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.array,
};

export { TypeFilter }