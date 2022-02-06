import { Text, View, TextInput, StyleSheet } from 'react-native';
import React from "react";

export default function BarraPesquisa ({handleDisplayPesquisa}) {
  return (
    <View style={styles.barraPesquisa}>
      <TextInput onChangeText={(newText)=> handleDisplayPesquisa(newText)} style={styles.inputSearch} placeholder={"Pesquise um produto na lista..."} editable></TextInput>
		</View>
  )
}



const styles = StyleSheet.create({
  /*SearchBar*/
  barraPesquisa: {
    width: "100%",
    flexDirection: "row",
    height: 60,
    backgroundColor: "#FCB1A6",
    justifyContent: "center",
  },
  inputSearch: {
    margin: 8,
    backgroundColor: "#fffffc", 
    padding: 10,
    borderRadius: 8,
    flex:2
  }
})