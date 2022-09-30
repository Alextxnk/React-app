import React, { useEffect, useState } from 'react';
import { Button, Htag, P, Tag, Rating } from '../components';
import { Layout} from '../layout/Layout';

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0); // начально значение 0 
  const [rating, setRating] = useState<number>(4);

  useEffect(() => {
    console.log('Counter ' + counter);
    return function cleanup() {
      console.log('Unmount');
    };
  }); 

  useEffect(() => {
    console.log('Mounted ');
  }, []); // пустые скобки - только один раз будет выведен Counter 0 

  return (
    <Layout>
      <Htag tag='h1'>Text</Htag>
      <Htag tag='h1'>{counter}</Htag>
      <Button appearance='primary' arrow='right' onClick={() => setCounter(x => x + 1)}>Button</Button>
      <Button appearance='ghost' arrow='right'>Button</Button>
      <P size='l'>Большой</P>
			<P>Средний</P>
			<P size='s'>Маленький</P>
			<Tag size='s'>Ghost</Tag>
			<Tag size='m' color='red'>Red</Tag>
			<Tag size='s' color='green'>Green</Tag>
			<Tag color='primary'>Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </Layout>
  );
}