import { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import { Card } from './Card'
import { Modal } from '../Modal'
import './ResultTable.css'

function ResultTable () {
    const {
        filteredProducts,
        isLoading,
        isOpen,
        isAddToCartOpen
    } = useContext(SearchContext);
    return (
        <div className='ResultContainer'>
            <h2>Results:</h2>
            <div className={`CardResultsContainer ${isAddToCartOpen && 'customStyle'}`}>
                {   isLoading ?
                    <span className="loader"></span>
                    :
                    filteredProducts.map((product, index) =>
                        <Card
                            key={index}
                            image = {product.image}
                            title = {product.title}
                            price = {product.price}
                            description = {product.description}
                            rate = {Math.round(product.rating.rate)}
                        />
                    )
                }
            </div>
            {isOpen && <Modal />}
        </div>
    )
}

export { ResultTable }
