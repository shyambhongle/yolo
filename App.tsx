import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import {ToastProvider} from 'react-native-toast-notifications';
import Home from './src/screen/Home';
import SystemNavigationBar from 'react-native-system-navigation-bar';
SystemNavigationBar.navigationHide();

const App = () => {
  return (
    <ToastProvider textStyle={styles.textWrapper}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#1c1b1b" barStyle="dark-content" />
        <Home />
      </SafeAreaView>
    </ToastProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1b1b',
  },
  textWrapper: {
    textAlign: 'center',
  },
});
