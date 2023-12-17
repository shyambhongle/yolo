import {StyleSheet, View, FlatList} from 'react-native';
import React, {useEffect, useRef} from 'react';
import ListItem from './ListItem';
import {FlashList} from '@shopify/flash-list';

interface Props {
  timing: number;
  spin: number;
}
const data = Array.from({length: 100}, (v, i) => ({id: i + 1}));

const SingleList = (props: Props) => {
  const flatlistRef = useRef<FlatList>(null);
  useEffect(() => {
    setTimeout(() => {
      spin();
    }, props.timing);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.spin]);

  const spin = () => {
    flatlistRef.current?.scrollToIndex({
      index: props.spin,
      animated: true,
    });
  };

  const getItemLayout = (_data: any, index: number) => ({
    length: 60,
    offset: 60 * index,
    index,
  });

  return (
    <View style={styles.container}>
      <FlashList
        ref={flatlistRef}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({index}) => <ListItem key={index} index={index} />}
        getItemLayout={getItemLayout}
        keyExtractor={(item, index) => index.toString()}
        estimatedItemSize={60}
        estimatedListSize={{height: 60 * 100, width: 60}}
      />
    </View>
  );
};

export default SingleList;

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 180,
    alignItems: 'center',
    flexDirection: 'row',
  },
});
