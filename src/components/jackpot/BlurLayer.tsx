import {BlurView} from '@react-native-community/blur';
import {StyleSheet, View} from 'react-native';
import React from 'react';

const BlurLayer = () => {
  return (
    <View style={styles.container}>
      <BlurView
        style={styles.blurWrapper}
        blurType="dark" // You can choose 'dark', 'light', or 'xlight'
        blurAmount={1} // You can adjust the blur amount
      />
    </View>
  );
};

export default BlurLayer;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    width: '100%',
    height: '100%',
  },
  blurWrapper: {
    width: '100%',
    height: '100%',
  },
});
