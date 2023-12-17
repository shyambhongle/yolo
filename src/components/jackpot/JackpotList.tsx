/* eslint-disable react-hooks/exhaustive-deps */
import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SingleList from './SingleList';

interface Props {
  spin: boolean;
  cb: (result: string) => void;
}

const JackpotList = (props: Props) => {
  const [tI, setTi] = useState([0, 1, 2]);
  useEffect(() => {
    if (props.spin) {
      spinIt();
    }
  }, [props.spin]);

  const spinIt = () => {
    const i1 = Math.floor(Math.random() * 97);
    const i2 = Math.floor(Math.random() * 97);
    const i3 = Math.floor(Math.random() * 97);
    setTi([i1, i2, i3]);

    setTimeout(() => {
      const r1 = resultCheck(i1);
      const r2 = resultCheck(i2);
      const r3 = resultCheck(i3);
      if (r1 === r2 && r1 === r3) {
        props.cb('won');
      } else {
        props.cb('loose');
      }
    }, 2000);
  };

  const resultCheck = (d: number) => {
    return d % 3 === 0 ? 'fruit' : d % 3 === 1 ? 'bomb' : 'crown';
  };
  return (
    <View style={styles.container}>
      <SingleList timing={300} spin={tI[0]} />
      <SingleList timing={500} spin={tI[1]} />
      <SingleList timing={800} spin={tI[2]} />
    </View>
  );
};

export default JackpotList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 180,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
