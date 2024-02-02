import { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import './CartLogo.css'

function CartLogo () {
    const {
        setIsAddToCartOpen
    } = useContext(SearchContext)

    const handleCartLogoClick = () => {
        setIsAddToCartOpen(prevCartOpen => !prevCartOpen)
    }

    return (
        <div className='cartLogoContainer'>
            <img
                src = 'src/assets/CartLogo/shopping-cart.png'
                onClick={handleCartLogoClick}
            />
        </div>
    )
}

export { CartLogo }