import { Card } from '../models';
import starImg from './img/star.svg';

type Props = {
  card: Card;
};

export default function CardComp(props: Props) {
  let badgeText;
  if (props.card.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.card.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className='card'>
      <img
        src={`/src/components/img/${props.card.coverImg}`}
        alt='Card Image'
        className='cardImg'
      />
      {badgeText && (
        <div className='card--badge'>
          <p>{badgeText}</p>
        </div>
      )}
      <div className='cardStats'>
        <img src={starImg} alt='Star Image' />
        <span>{props.card.stats.rating}</span>
        <span className='gray'>({props.card.stats.reviewCount})</span>
        <span className='gray'>{props.card.location}</span>
      </div>
      <p className='card--title'>{props.card.title}</p>
      <p className='card--price'>
        <span className='bold'>From ${props.card.price} </span> / person
      </p>
    </div>
  );
}
