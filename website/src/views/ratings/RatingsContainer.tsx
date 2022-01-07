import RatingBar from "./RatingBar";
import ReviewList from "./ReviewList";
import { reviews } from './types'; 

const RatingsContainer = () => { 
    return <div>
        <ReviewList reviews={reviews} />
    </div>; 
}

export default RatingsContainer; 