import { useState } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import './ProductAmountCounter.css'

function CartProductAmountCounter () {

    const [productAmountCounter, setProductAmountCounter] = useState(1);

    const handleDecreaseProductAmount = () => {
        const newProductAmount = Math.max(productAmountCounter - 1, 1);
        setProductAmountCounter(newProductAmount);
    };

    const handleIncreaseProductAmount = () => {
        const newProductAmount = productAmountCounter + 1;
        setProductAmountCounter(newProductAmount);
    };


    return (
        <div className='AddToCartProductAmountCounterContainer'>
            <AiOutlineMinusCircle className='reduceAmount' onClick={handleDecreaseProductAmount}/>
            <strong> {productAmountCounter} </strong>
            <AiOutlinePlusCircle className='incrementAmount' onClick={handleIncreaseProductAmount}/>
        </div>
    )
}

export { CartProductAmountCounter }
