import React from 'react';
import { Primary } from '../components/Button/Button.stories.js';
import { LargeInput } from '../components/Input/Input.stories.js';

export default {
  title: 'form/Subscription',
};

export const PrimarySubscription = () => {
  return (
    <>
      <LargeInput />
      <Primary />
    </>
  );
};