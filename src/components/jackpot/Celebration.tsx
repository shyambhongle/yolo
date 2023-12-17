import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import {StyleSheet} from 'react-native';
const Lo = require('../../assets/lottie/celebration.json');
import React from 'react';
export default function Celebration() {
  return (
    <View style={styles.container}>
      <LottieView
        source={Lo}
        autoPlay={true}
        loop={false}
        style={styles.lottie}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  lottie: {
    width: '100%',
    height: '100%',
  },
});
