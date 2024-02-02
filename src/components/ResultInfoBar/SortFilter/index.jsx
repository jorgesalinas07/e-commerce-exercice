import { useContext } from 'react';
import { SearchContext } from '../../../contexts/SearchContext'
import './SortFilter.css'

function SortFilter () {
    const {
        setPriceSortOrder,
    } = useContext(SearchContext);

    return (
        <div className='SortFilterContainer'>
            <select
                name="order"
                id="order"
                onChange={(event) => {
                    setPriceSortOrder(event.target.value);
                }}
                >
                <option value="Default">Name</option>
                <option value="Price_Low">Price: Low to High</option>
                <option value="Price_High">Price: High to Low</option>
            </select>
        </div>
    )
}

export { SortFilter }
