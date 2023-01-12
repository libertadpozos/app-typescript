// import '../styles/Card.css';
import { Fruit } from '../interfaces';

type Props = {
  fruit: Fruit;
  onClickFruit: (selectedFruit: Fruit) => void | undefined;
};

function Card({ fruit, onClickFruit }: Props) {
  return (
    <>
      <li key={fruit.id} onClick={() => onClickFruit(fruit)}>
        {fruit.name}
      </li>
    </>
  );
}

export default Card;
