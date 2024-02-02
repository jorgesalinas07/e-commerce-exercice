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
        setIsAddToCartOpen,
        cartProducts
    } = useContext(SearchContext);

    if (!cartProducts.length) {
        setIsAddToCartOpen(false)
    }

    if (isAddToCartOpen) {
        return (
            <div className="AddToCartContainer">
                <div className='CartTotalDetailsContainer'>
                    <p>Subtotal</p>
                    <strong>$2000</strong>
                    <Button type="primary" contentFontSize='large'>Continue</Button>
                </div>
                <div className='CartProductsDetails'>
                    {cartProducts.map((cartProduct, index) =>
                        <ProductDetail
                            key={index}
                            productIndex={index}
                            imageProduct={cartProduct.imageProduct}
                            priceProduct={cartProduct.priceProduct}
                        />
                        )
                    }
                </div>
            </div>
        )
    }
    return
}

export { AddToCart }
