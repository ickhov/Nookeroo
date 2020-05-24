/**
 * Custom alert component
 * 
 * Properties that can be initialize:
 * showAlert: bool
 * title: string
 * message: string
 * showCancelButton: bool
 * showConfirmButton: bool
 * cancelText: string
 * confirmText: string
 * cancelButtonColor: string
 * confirmButtonColor: string
 * onCancelPressed: () => {}
 * onConfirmPressed: () => {}
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import Colors from '../../assets/colors';
import Fonts from '../../assets/fonts';



export default function PopUpDialog({
  showAlert,
  title,
  message,
  showCancelButton,
  showConfirmButton,
  cancelText,
  confirmText,
  cancelButtonColor,
  confirmButtonColor,
  onCancelPressed,
  onConfirmPressed,
}) {

  return (
    <AwesomeAlert
      show={showAlert ?? false}
      showProgress={false}
      contentContainerStyle={styles.popUpContainer}
      titleStyle={styles.popUpTitle}
      messageStyle={styles.popUpText}
      cancelButtonTextStyle={styles.popUpBtnText}
      cancelButtonStyle={styles.popUpBtn}
      title={title ?? 'Default'}
      message={message ?? 'No message'}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={true}
      showCancelButton={showCancelButton ?? true}
      showConfirmButton={showConfirmButton ?? false}
      cancelText={cancelText ?? 'Cancel'}
      confirmText={confirmText ?? 'Confirm'}
      cancelButtonColor={cancelButtonColor ?? Colors.error}
      confirmButtonColor={confirmButtonColor ?? Colors.success}
      onCancelPressed={onCancelPressed}
      onConfirmPressed={onConfirmPressed}
    />
  );

};

const styles = StyleSheet.create({
  popUpContainer: {
    borderRadius: 20
  },
  popUpTitle: {
    fontFamily: Fonts.bold,
    fontSize: 20,
    textAlign: 'center',
    color: Colors.black
  },
  popUpText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    textAlign: 'center',
    color: Colors.black
  },
  popUpBtn: {
    backgroundColor: Colors.error
  },
  popUpBtnText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    textAlign: 'center',
    color: Colors.white
  }
});