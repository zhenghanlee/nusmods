import RatingBar from './RatingBar';

type Props = {
  title: string;
  rating: number;
};

const RatingBarWithTitle = ({ title, rating }: Props) => (
  <div style={{ width: '100%', margin: 8 }}>
    <text style={{ fontSize: 14 }}>{title}</text>
    <RatingBar rating={rating} />
  </div>
);

export default RatingBarWithTitle;
