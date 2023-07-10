import React from 'react';
import {Button} from 'react-native';
import CrashTester from 'react-native-crash-tester';

export default function CustomButtonTwo() {
  const throwError = () => {
    // @ts-ignore
    CrashTester.nativeException('Something native went wrong');
  };

  return <Button onPress={throwError} title="Hello Two!" />;
}
