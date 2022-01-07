import ReviewComment from './ReviewComment'; 
import { Review } from './types'; 

type Props = {
    reviews: Review[];
}; 

const ReviewList = (props: Props) => {
    return (
    <div>
        {props.reviews.map(r => <ReviewComment review={r}/>)}
    </div>);  
}

export default ReviewList; 