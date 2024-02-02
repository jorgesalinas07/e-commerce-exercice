import { Rating } from './Rating'
import './RatingFilter.css'

function RatingFilter () {
    const ratings = [4, 3, 2, 1];
    return (
        <div className='RatingFilterContainer'>
            <h2>Rates:</h2>
            <div className='RatingsContainer'> {
                ratings.map((stars) => (
                    <Rating
                        key={stars}
                        stars={stars}
                        isRateFilterClick={true}
                    />
                ))
            }
            </div>
        </div>
    )
}

export { RatingFilter }