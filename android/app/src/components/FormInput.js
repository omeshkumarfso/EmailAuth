import React from 'react';
import { StyleSheet, TextInput,Dimensions } from 'react-native';
export default function FormInput({ labelValue, placeholderText, ...rest }) {
    return (
      <TextInput
      style={styles.input}
        value={labelValue}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor='#666'
        {...rest}
      />
    );
  }
  const styles = StyleSheet.create({
    input: {
      padding: 10,
      marginTop: 5,
      marginBottom: 10,
      width: Dimensions.get("screen").width / 1.5,
      height: Dimensions.get("screen").height / 15,
      fontSize: 16,
      borderRadius: 8,
      borderWidth: 1
    }
  });