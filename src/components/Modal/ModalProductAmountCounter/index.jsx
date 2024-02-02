import { useContext, useState } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import './ModalProductAmountCounter.css'

function ModalProductAmountCounter () {
    const {
        setProductAmount
    } = useContext(SearchContext)


    const [productAmountCounter, setProductAmountCounter] = useState(1);

    const handleDecreaseProductAmount = () => {
        setProductAmountCounter(prevProductAmount => {
            const newProductAmount = Math.max(1, prevProductAmount - 1);
            setProductAmount(newProductAmount)
            return newProductAmount
        }
        );
    }

    const handleIncreaseProductAmount = () => {
        setProductAmountCounter(prevProductAmount => {
            const newProductAmount = prevProductAmount + 1
            setProductAmount(newProductAmount)
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
