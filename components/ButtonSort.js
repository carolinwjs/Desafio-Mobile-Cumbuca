import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useState} from "react";

const ButtonSort = ({styleName, label, handleTouch}) => {
  return (
    <TouchableOpacity style={styleName} onPress={() => handleTouch(label)}><Text style={styles.textBotaoSort}>{label}</Text></TouchableOpacity>
  )
}

export default ButtonSort;

const styles = StyleSheet.create({
 /*Botao Sort*/
  textBotaoSort: {
    color: "#5D2A42",
    fontWeight: 550,
    fontSize:16.5
  },
})