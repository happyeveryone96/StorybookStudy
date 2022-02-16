import Input from './Input';
import React from 'react';

export default {
  title: 'Input',
  component: Input,
};

export const SmallInput = () => <Input size="small" placeholder="small size" />;
export const MediumInput = () => (
  <Input size="medium" placeholder="medium size" />
);
export const Large = () => <Input size="large" placeholder="large size" />;