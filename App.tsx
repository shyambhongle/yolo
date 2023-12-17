import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import Home from './src/screen/Home';
import {ToastProvider} from 'react-native-toast-notifications';

const App = () => {
  return (
    <ToastProvider textStyle={styles.textWrapper}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#0D0D0D" barStyle="dark-content" />
        <Home />
      </SafeAreaView>
    </ToastProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  textWrapper: {
    textAlign: 'center',
  },
});
