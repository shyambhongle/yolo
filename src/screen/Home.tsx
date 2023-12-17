import {StyleSheet, View} from 'react-native';
import React from 'react';
import Jackpot from '../components/jackpot/Jackpot';

const Home = () => {
  return (
    <View style={styles.container}>
      <Jackpot />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
