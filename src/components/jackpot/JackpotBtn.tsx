import {StyleSheet, View} from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button';
import React from 'react';

interface Props {
  cb: () => void;
}

const JackpotBtn = (props: Props) => {
  return (
    <View style={styles.container}>
      <AwesomeButton
        width={220}
        backgroundColor="#A90808"
        raiseLevel={10}
        textColor="#f5f2eb"
        onPressedOut={props.cb}
        backgroundDarker="#4F0909">
        SPIN NOW
      </AwesomeButton>
      <View style={styles.shadowPart} />
    </View>
  );
};

export default JackpotBtn;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    transform: [{rotateX: '45deg'}],
  },
  button: {
    marginBottom: 16,
  },
  shadowPart: {
    width: 210,
    height: 50,
    backgroundColor: '#000',
    position: 'absolute',
    bottom: -10,
    zIndex: -1,
    borderRadius: 1,
    transform: [{rotateX: '30deg'}],
  },
});
