import {StyleSheet} from 'react-native';
import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';

interface Props {
  show: boolean;
  reset: () => void;
}

const JackpotPopup = (props: Props) => {
  return (
    <AwesomeAlert
      show={props.show}
      showProgress={false}
      title="Winner🎉🥳"
      message="You have won 500💰"
      closeOnTouchOutside={false}
      closeOnHardwareBackPress={false}
      showConfirmButton={true}
      confirmText="Collect"
      confirmButtonColor="#008000"
      onConfirmPressed={props.reset}
      contentContainerStyle={styles.container}
      messageStyle={styles.messageStyle}
      confirmButtonStyle={styles.confirmButtonStyle}
      titleStyle={styles.titleStyle}
      confirmButtonTextStyle={styles.confirmButtonTextStyle}
    />
  );
};

export default JackpotPopup;

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 200,
    marginTop: 80,
  },
  titleStyle: {
    fontSize: 30,
  },
  messageStyle: {
    fontSize: 20,
    marginTop: 10,
  },
  confirmButtonStyle: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButtonTextStyle: {
    fontSize: 20,
  },
});
