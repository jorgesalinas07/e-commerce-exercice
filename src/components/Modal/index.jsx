import { useContext } from 'react';
import './Modal.css'
import { Rating } from "../Filter/RatingFilter/Rating"
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { SearchContext } from '../../contexts/SearchContext';
import { Button } from 'antd';

function Modal () {
    const {
        setIsOpen,
        imageProduct,
        titleProduct,
        priceProduct,
        descriptionProduct,
        rateProduct
    } = useContext(SearchContext);

    const setCloseModal = () => {
        setIsOpen(false)
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
                        <h3>{titleProduct}</h3>
                        <h3>${priceProduct}</h3>
                    </div>
                    <Rating stars={rateProduct}/>
                    <h6 className='DetailModalDescription'>{descriptionProduct}</h6>
                    <div className='AddToCardModalContainer'>
                        <Button type="primary">Add</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Modal }
