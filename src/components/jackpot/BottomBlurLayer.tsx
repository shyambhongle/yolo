import {StyleSheet, View} from 'react-native';
import React from 'react';
import {BlurView} from '@react-native-community/blur';

const BottomBlurLayer = () => {
  return (
    <View style={styles.container}>
      <BlurView style={styles.blurWrapper} blurAmount={1} />
    </View>
  );
};

export default BottomBlurLayer;

const styles = StyleSheet.create({
  blurWrapper: {
    width: '100%',
    height: '100%',
  },
  container: {
    overflow: 'hidden',
    position: 'absolute',
    width: 300,
    height: 78,
    bottom: 10,
    left: 13,
    zIndex: 1,
  },
});
