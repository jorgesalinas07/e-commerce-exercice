import { useContext } from 'react';
import './Modal.css'
import { Rating } from "../Filter/RatingFilter/Rating"
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { SearchContext } from '../../contexts/SearchContext';
import { ModalProductAmountCounter } from './ModalProductAmountCounter';
import { Button } from 'antd';

function Modal () {
    const {
        setIsOpen,
        imageProduct,
        titleProduct,
        priceProduct,
        descriptionProduct,
        rateProduct,
        setIsAddToCartOpen,
    } = useContext(SearchContext);

    const setCloseModal = () => {
        setIsOpen(false)
    }

    const handleAddToCart = () => {
        setCloseModal()
        setIsAddToCartOpen(true)
    }

    return (
        <div className='ModalContainer'>
            <div className='ContentModalContainer'>
                <div className='ProductImageContainer'>
                    <AiOutlineCloseCircle className='closeModal' onClick={setCloseModal}/>
                    <img src={imageProduct}/>
                </div>
                <div className="DetailsModalContainer">
                    <div className="HeaderDetailModalContainer">
                        <strong className='title' >{titleProduct}</strong>
                        <strong>${priceProduct}</strong>
                    </div>
                    <Rating stars={rateProduct}/>
                    <h6 className='DetailModalDescription'>{descriptionProduct}</h6>
                    <div className='AddToCardModalContainer'>
                        <Button type="primary" onClick={handleAddToCart}>Add</Button>
                        <div className='ModalProductAmountCounterContainer'>
                            <ModalProductAmountCounter/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Modal }
