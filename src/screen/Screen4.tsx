import React, {useRef} from 'react';
import {View, Text, Image, Animated} from 'react-native';

const BANNER_H = 350;

const BG = require('../assets/images/backdrop.png');

const HomeScreen = () => {
  const scrollA = useRef(new Animated.Value(0)).current;
  return (
    <View>
      <Animated.ScrollView
        // onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollA}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}>
        <View style={styles.bannerContainer}>
          <Animated.Image style={styles.banner(scrollA)} source={BG} />
        </View>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          semper turpis. Ut in fringilla nisl, sit amet aliquet urna. Donec
          sollicitudin libero sapien, ut accumsan justo venenatis et. Proin
          iaculis ac dolor eget malesuada. Cras commodo, diam id semper sodales,
          tortor leo suscipit leo, vitae dignissim velit turpis et diam. Proin
          tincidunt euismod elit, at porttitor justo maximus vel. Proin viverra,
          nibh non accumsan sollicitudin, arcu metus sagittis nunc, et tempor
          tellus ligula et justo. Pellentesque ultrices fermentum efficitur.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec
          convallis nisl, et rhoncus mauris. Morbi consequat sem tellus, in
          scelerisque lorem vehicula ut.
          {'\n\n'}Nam vel imperdiet massa. Donec aliquet turpis quis orci
          fermentum, eget egestas tellus suscipit. Sed commodo lectus ac augue
          mattis, a pulvinar metus venenatis. Vestibulum cursus rhoncus mauris,
          fringilla luctus risus eleifend ut. Vestibulum efficitur imperdiet
          scelerisque. Pellentesque sit amet lorem bibendum, congue dolor
          suscipit, bibendum est. Aenean leo nibh, varius vel felis nec,
          sagittis posuere nunc. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Duis ullamcorper laoreet
          orci, ac tempus dui aliquet et. Morbi porta nisi sed augue vestibulum
          tristique. Donec nisi ligula, efficitur at arcu et, sagittis imperdiet
          urna. Sed sollicitudin nisi eget pulvinar ultricies. Ut sit amet dolor
          luctus massa dapibus tincidunt non posuere odio. Aliquam sit amet
          vehicula nisi.
        </Text>
      </Animated.ScrollView>
    </View>
  );
};

const styles = {
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
  },
  banner: scrollA => ({
    height: BANNER_H,
    width: '200%',
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),
};

export default HomeScreen;
