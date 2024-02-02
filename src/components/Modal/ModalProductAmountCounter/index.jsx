import { useState } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import './ModalProductAmountCounter.css'

function ModalProductAmountCounter () {

    const [productAmountCounter, setProductAmountCounter] = useState(1);

    const handleDecreaseProductAmount = () => {
        setProductAmountCounter(prevProductAmount => {
            const newProductAmount = Math.max(1, prevProductAmount - 1);
            return newProductAmount
        }
        );
    }

    const handleIncreaseProductAmount = () => {
        setProductAmountCounter(prevProductAmount => {
            const newProductAmount = prevProductAmount + 1
            return newProductAmount
        });
    }

    return (
        <div className='ProductAmountCounterContainer'>
            <AiOutlineMinusCircle className='reduceAmount' onClick={handleDecreaseProductAmount}/>
            <p className='productAmountCounter'> {productAmountCounter} </p>
            <AiOutlinePlusCircle className='incrementAmount' onClick={handleIncreaseProductAmount}/>
        </div>
    )
}

export { ModalProductAmountCounter }
