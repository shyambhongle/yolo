import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import JackpotBtn from './JackpotBtn';

const UpFrame = require('../../assets/images/upFrame.png');
const DownFrame = require('../../assets/images/downFrame.png');
const LeftFrame = require('../../assets/images/leftFrame.png');
const RightFrame = require('../../assets/images/rightFrame.png');

const Jacpot = () => {
  return (
    <View style={styles.container}>
      <View style={styles.frameWrapper}>
        <Image source={UpFrame} style={styles.upframe} />
        <Image source={DownFrame} style={styles.bottomframe} />
        <Image source={LeftFrame} style={styles.leftframe} />
        <Image source={RightFrame} style={styles.rightframe} />
      </View>
      <JackpotBtn />
    </View>
  );
};

export default Jacpot;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  frameWrapper: {
    width: 328,
    height: 222.3,
    position: 'relative',
    backgroundColor: '#000',
  },
  upframe: {
    width: 326,
    height: 7,
    position: 'absolute',
    top: 0,
    left: 1,
  },
  bottomframe: {
    width: 326,
    height: 7,
    position: 'absolute',
    bottom: 0,
  },
  leftframe: {
    height: 220,
    width: 7,
    position: 'absolute',
    left: 0,
  },
  rightframe: {
    height: 220,
    width: 7,
    position: 'absolute',
    right: 0,
  },
});
