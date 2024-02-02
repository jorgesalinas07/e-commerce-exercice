import { AiOutlineCloseCircle } from 'react-icons/ai'
import { CartProductAmountCounter } from './ProductAmountCounter';
import './ProductDetail.css'

function ProductDetail () {

    return (
        <div className='CartProductDetailContainer'>
            <div className="CartProductImageContainer">
                <AiOutlineCloseCircle className='removeCartProduct'/>
                <img src={'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'}/>
            </div>
            <strong className='CartProductPrice'>$2000</strong>
            <div className='CartProductAmountContainer'>
                <CartProductAmountCounter/>
            </div>
        </div>
    )
}

export { ProductDetail }
