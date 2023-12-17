import {StyleSheet, View} from 'react-native';
import React from 'react';
import SingleList from './SingleList';

interface Props {
  spin: boolean;
}

const JackpotList = (props: Props) => {
  return (
    <View style={styles.container}>
      <SingleList timing={300} spin={props.spin} />
      <SingleList timing={500} spin={props.spin} />
      <SingleList timing={800} spin={props.spin} />
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
