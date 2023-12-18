import {StyleSheet, Image, View} from 'react-native';
import React, {useState} from 'react';
import JackpotBtn from './JackpotBtn';
import JackpotList from './JackpotList';
import TopBlurLayer from './TopBlurLayer';
import BottomBlurLayer from './BottomBlurLayer';
import Celebration from './Celebration';
import {useToast} from 'react-native-toast-notifications';
import phrases from '../../../db/looserDb';
import JackpotPopup from './JackpotPopup';
var Sound = require('react-native-sound');

const UpFrame = require('../../assets/images/upFrame.png');
const DownFrame = require('../../assets/images/downFrame.png');
const LeftFrame = require('../../assets/images/leftFrame.png');
const RightFrame = require('../../assets/images/rightFrame.png');

Sound.setCategory('Playback');

var one = new Sound('one.mp3', Sound.MAIN_BUNDLE);
var two = new Sound('two.mp3', Sound.MAIN_BUNDLE);
var four = new Sound('four.mp3', Sound.MAIN_BUNDLE);

const Jacpot = () => {
  const [spin, setSpin] = useState(false);
  const [result, setResult] = useState('try');
  const toast = useToast();

  const handleSpin = () => {
    four.play();
    setResult('try');
    setSpin(() => true);
    setTimeout(() => {
      setSpin(() => false);
    }, 3000);
  };

  const handleResult = (r: string) => {
    setResult(r);
    if (r === 'won') {
      one.play();
      setTimeout(() => {
        setResult('popup');
      }, 2000);
    }
    if (r === 'loose') {
      two.play();
      selectRandomPhrase();
      setTimeout(() => {
        setResult('try');
      }, 2000);
    }
  };

  const selectRandomPhrase = () => {
    const i = Math.floor(Math.random() * 9);
    toast.show(phrases[i]);
  };

  const reset = () => {
    setResult('try');
  };

  return (
    <View style={styles.container}>
      <View style={styles.frameWrapper}>
        <Image source={UpFrame} style={styles.upframe} />
        <Image source={DownFrame} style={styles.bottomframe} />
        <Image source={LeftFrame} style={styles.leftframe} />
        <Image source={RightFrame} style={styles.rightframe} />
        <JackpotList spin={spin} cb={handleResult} />
        <BottomBlurLayer />
        <TopBlurLayer />
      </View>
      <JackpotBtn cb={handleSpin} />
      <JackpotPopup show={result === 'popup'} reset={reset} />
      {result === 'won' && <Celebration />}
    </View>
  );
};

export default Jacpot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  frameWrapper: {
    width: 328,
    height: 222.3,
    position: 'relative',
    backgroundColor: '#000',
    justifyContent: 'center',
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
