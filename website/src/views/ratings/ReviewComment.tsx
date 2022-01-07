import { useState } from 'react';
import classnames from 'classnames';
import RatingBarWithTitle from './RatingBarWithTitle';
import { Review } from './types'; 
type Props = {
    review: Review
}; 

const ReviewComment = (props: Props) => { 
    const [seeMore, setSeeMore] = useState(false); 

    const SeeMoreButton = () => {
        return <button
        style={{marginTop: "10px"}}
        onClick={() => setSeeMore(!seeMore)}
        type="button"
        className={classnames('btn', {
          'btn-primary': seeMore,
          'btn-outline-primary': !seeMore,
        })}
      >
        {seeMore ? "See Less" : "See More"}
      </button>
    }

    const RatingRow = () => {
        return <div style={{
            width: "100%", 
            display: "flex", 
            flexDirection: "row",
            justifyContent: "space-around"
        }}><RatingBarWithTitle title="Workload" 
                rating={props.review.workload}/>
            <RatingBarWithTitle title="Difficulty" 
                rating={props.review.difficulty}/>
            <RatingBarWithTitle title="Teaching Staff" 
                rating={props.review.teachingStaff}/>
            </div>;
    }; 

    return <div style={{ 
        padding:"20px", 
        margin: "8px", 
        borderRadius: "8px", 
        borderWidth: "1px", 
        borderStyle:"solid",
        borderColor: "grey"}}>
        <div style={{marginBottom: "20px", display: "flex", flexDirection: "row"}}>
            <div style={{width: "25%", fontSize: 17, fontWeight:"bold"}}>{props.review.name}</div>
            <RatingRow />
        </div>
        <div>
            {seeMore ? props.review.review : props.review.review.substring(0, 300)}</div>
            {props.review.review.length > 300 ? <SeeMoreButton /> : <></>} 
    </div>;
}

export default ReviewComment; 