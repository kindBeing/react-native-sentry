import React from 'react';
import {Button} from 'react-native';

export default function CustomButton() {
  const throwError = () => {
    throw Error('Something is wrong 1');
  };

  return <Button onPress={throwError} title="Hello Hello!" />;
}
