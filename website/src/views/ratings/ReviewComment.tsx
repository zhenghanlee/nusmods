import { Review } from './types'; 
type Props = {
    review: Review
}; 

const ReviewComment = (props: Props) => { 
    return <div style={{
        padding:"8px", 
        margin: "8px", 
        borderRadius: "8px", 
        borderWidth: "1px", 
        borderStyle:"solid",
        borderColor: "grey"}}>
        <div>{props.review.name}</div>
        <div>{props.review.review}</div>
    </div>;
}

export default ReviewComment; 