import { useContext } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';
import {
    Button
  } from 'antd';
import './AddToCart.css'
import { ProductDetail } from './ProductDetail';

function AddToCart () {
    const {
        isAddToCartOpen,
    } = useContext(SearchContext);

    if (isAddToCartOpen) {
        return (
            <div className="AddToCartContainer">
                <div className='CartTotalDetailsContainer'>
                    <p>Subtotal</p>
                    <strong>$2000</strong>
                    <Button type="primary" contentFontSize='large'>Continue</Button>
                </div>
                <div className='CartProductsDetails'>
                    <ProductDetail/>
                </div>
            </div>
        )
    }
    return
}

export { AddToCart }
