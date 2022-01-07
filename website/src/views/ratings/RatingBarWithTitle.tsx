import RatingBar from "./RatingBar"; 

type Props = {
    title: string, 
    rating: number, 
    style?: any 
}

const RatingBarWithTitle = ({title, rating} : Props) => {
    return <div style={{width: "100%", margin: 8}}>
        <text style={{fontSize: 14}}>{title}</text>
        <RatingBar rating={rating}/>
    </div>
}

export default RatingBarWithTitle; 