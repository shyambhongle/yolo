import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

const Fruit = require('../../assets/images/fruit.png');
const Crown = require('../../assets/images/crown.png');
const Bomb = require('../../assets/images/bomb.png');

interface Props {
  index: number;
}
const ListItem = (props: Props) => {
  const {index} = props;
  return (
    <View style={styles.container}>
      <Image
        source={index % 3 === 0 ? Fruit : index % 3 === 1 ? Bomb : Crown}
        style={styles.wrapper}
      />
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 60,
  },
  wrapper: {
    width: 50,
    height: 50,
  },
});
