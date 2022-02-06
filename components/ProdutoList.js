import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useState} from "react";
import ProdutoUnit from "./ProdutoUnit";

const ProdutoList = ({listaProdutos, funDelete, funAumenta, funDiminui}) => {
  return (
    <View style={styles.listProduto}>
      {listaProdutos.map(produto =><ProdutoUnit produto={produto} funDelete={funDelete} funAumenta={funAumenta} funDiminui={funDiminui}/>)}
    </View>
  )
}

export default ProdutoList;

const styles = StyleSheet.create({
 /*ProdutoList*/
  listProduto: {
    marginTop: 10,
    width: "100%",
    backgroundColor: "#FCB1A6",
    flexDirection: "column",
    paddingBottom: 3,
    paddingTop: 3
  },
})