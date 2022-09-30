import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';
import { useState } from 'react';

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
   // заполнили пустыми объектами
   const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>)); 

   const constructRating = (currentRating: number) => {
      const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
         return (
            <StarIcon 
               className={cn(styles.star, {
                  [styles.fill]: i < currentRating
               })}
            />
         );
      });
   };

   return (
      <div> {...props}

      </div>
   );
};