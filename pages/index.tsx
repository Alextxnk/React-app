import React, { useState } from 'react';
import { Button, Htag, P, Tag } from '../components';

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0); // начально значение 0 
  return (
    <>
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
    </>
  );
}