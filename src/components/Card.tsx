import '../styles/Card.css';

interface Props {
  fruitName: string;
}

function Card({ fruitName }: Props) {
  return (
    <div className='card'>
      <p>{fruitName}</p>
    </div>
  );
}

export default Card;
