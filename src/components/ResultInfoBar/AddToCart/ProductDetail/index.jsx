import { useContext } from 'react';
import { SearchContext } from '../../../../contexts/SearchContext';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { CartProductAmountCounter } from './ProductAmountCounter';
import PropTypes from 'prop-types';
import './ProductDetail.css'

function ProductDetail ({ productIndex, imageProduct, priceProduct}) {
    const {
        setCartProducts
    } = useContext(SearchContext)


    const handleRemoveFromCart = () => {
        setCartProducts((prevCartProducts) =>
        prevCartProducts.filter((_, index) => index !== productIndex)
        );
    }

    return (
        <div className='CartProductDetailContainer'>
            <div className="CartProductImageContainer">
                <AiOutlineCloseCircle className='removeCartProduct' onClick={handleRemoveFromCart}/>
                <img src={imageProduct}/>
            </div>
            <strong className='CartProductPrice'>${priceProduct}</strong>
            <div className='CartProductAmountContainer'>
                <CartProductAmountCounter/>
            </div>
        </div>
    )
}

ProductDetail.propTypes = {
    productIndex: PropTypes.number.isRequired,
    imageProduct: PropTypes.string.isRequired,
    priceProduct: PropTypes.number.isRequired,
};

export { ProductDetail }
