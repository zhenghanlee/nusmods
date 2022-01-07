type Props = {
  rating: number;
};

const RatingBar = (props: Props) => {
  const { rating } = props;
  const maxRating = 5;
  const isValidRating = rating >= 0 && rating <= maxRating;
  if (!isValidRating) {
    return <div>Error displaying rating. Invalid rating.</div>;
  }

  const percentageBar = (props.rating / maxRating) * 100;
  const RatingNumber = () => (
    <div style={{ padding: '5px', flexBasis: '10%', textAlign: 'center', fontWeight: 'bold' }}>
      {props.rating.toFixed(1)}
    </div>
  );
  const ProgressBar = () => (
    <div className="progress" style={{ flexBasis: '90%' }}>
      <div
        className="progress-bar bg-warning"
        role="progressbar"
        aria-label="progress bar"
        style={{ width: `${percentageBar}%` }}
      />
    </div>
  );

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <ProgressBar />
      <RatingNumber />
    </div>
  );
};

export default RatingBar;
