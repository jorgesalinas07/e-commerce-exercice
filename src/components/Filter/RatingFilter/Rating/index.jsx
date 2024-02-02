import { useContext } from 'react';
import { SearchContext } from '../../../../contexts/SearchContext'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import PropTypes from 'prop-types';
import './Rating.css'

function Rating ( {stars, isRateFilterClick = false} ) {
    const {
        setRateFilter
    } = useContext(SearchContext);

    const fillStars = () => {
        const etiquetas = [];
        const starSelected = [...Array(stars)].map((_, index) => (
            <AiFillStar className='StarFilled' key={index}/>
        ))
        const starNotSelected = [...Array(5-stars)].map((_, index) => (
            <AiOutlineStar className='StarNotFilled' key={index}/>
        ))
        etiquetas.push(starSelected)
        etiquetas.push(starNotSelected)
        return etiquetas
    }

    const handleRatingClick = () => {
        if (isRateFilterClick) {
            setRateFilter(stars)
        }
    };

    return (
        <div className='RatingContainer' onClick={handleRatingClick}>
            {fillStars()}
            <h3>& up</h3>
        </div>
    )
}

Rating.propTypes = {
    stars: PropTypes.number.isRequired,
    isRateFilterClick: PropTypes.bool,
};

export { Rating }
