/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// @ts-ignore
// eslint-disable-next-line prettier/prettier
import { SENTRY_DSN, SENTRY_SAMPLE_RATE, SENTRY_ORG, SENTRY_PROJECT, SENTRY_AUTH_TOKEN, SENTRY_RELEASE, SENTRY_DIST } from '@env';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import CustomButton from './nested-directory/CustomButton';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <CustomButton />
          <View>
            <Text>Sentry DSN: {SENTRY_DSN}</Text>
            <Text>{'\n'}</Text>
            <Text>Sentry Sample Rate: {SENTRY_SAMPLE_RATE}</Text>
            <Text>{'\n'}</Text>
            <Text>Sentry Org: {SENTRY_ORG}</Text>
            <Text>{'\n'}</Text>
            <Text>Sentry Project: {SENTRY_PROJECT}</Text>
            <Text>{'\n'}</Text>
            <Text>Sentry Auth Token: {SENTRY_AUTH_TOKEN}</Text>
            <Text>{'\n'}</Text>
            <Text>Sentry Release: {SENTRY_RELEASE}</Text>
            <Text>{'\n'}</Text>
            <Text>Sentry Dist: {SENTRY_DIST}</Text>
            <Text>{'\n'}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
export default App;
