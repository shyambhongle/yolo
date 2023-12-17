import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import Home from './src/screen/Home';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#211f1f" barStyle="dark-content" />
      <Home />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#211f1f',
  },
});
