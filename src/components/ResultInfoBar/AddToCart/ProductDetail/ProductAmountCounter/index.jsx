import { useContext, useState } from 'react';
import { SearchContext } from '../../../../../contexts/SearchContext';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import PropTypes from 'prop-types';
import './ProductAmountCounter.css'

function CartProductAmountCounter ({ amount, productIndex }) {
    const {
        setCartProducts
    } = useContext(SearchContext)

    const [productAmountCounter, setProductAmountCounter] = useState(amount);

    const updateProductAmount = (newProductAmount) => {
        setProductAmountCounter(newProductAmount);

        setCartProducts((prevCartProducts) =>
            prevCartProducts.map((product, index) => {
                if (index === productIndex) {
                    return {
                        ...product,
                        productAmount: newProductAmount
                    };
                }
                return product;
            })
        );
    };

    const handleDecreaseProductAmount = () => {
        const newProductAmount = Math.max(productAmountCounter - 1, 1);
        updateProductAmount(newProductAmount);
    };

    const handleIncreaseProductAmount = () => {
        const newProductAmount = productAmountCounter + 1;
        updateProductAmount(newProductAmount);
    };


    return (
        <div className='AddToCartProductAmountCounterContainer'>
            <AiOutlineMinusCircle className='reduceAmount' onClick={handleDecreaseProductAmount}/>
            <strong> {productAmountCounter} </strong>
            <AiOutlinePlusCircle className='incrementAmount' onClick={handleIncreaseProductAmount}/>
        </div>
    )
}

CartProductAmountCounter.propTypes = {
    amount: PropTypes.string.isRequired,
    productIndex: PropTypes.number.isRequired,
};

export { CartProductAmountCounter }
