import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useState} from "react";
import ButtonSort from "./ButtonSort";
import ProdutoList from "./ProdutoList";

const SortProduto = ({listaProdutos, funDelete, funAumenta, funDiminui , handleTouch}) => {
  return (
    <View>
      <View style={styles.sortProduto}>
        <ButtonSort styleName={styles.botaoSort} label="ID" handleTouch={handleTouch}/>
        <ButtonSort styleName={styles.botaoSort} label="Nome" handleTouch={handleTouch}/>
        <ButtonSort styleName={styles.botaoSort} label="Estoque" handleTouch={handleTouch}/>
        <ButtonSort styleName={styles.botaoSort} label="Val. Unit" handleTouch={handleTouch}/>
        <ButtonSort styleName={styles.botaoSort} label="Val. Total" handleTouch={handleTouch}/>
      </View>
      <ProdutoList listaProdutos={listaProdutos} funDelete={funDelete} funAumenta={funAumenta} funDiminui={funDiminui}/>
    </View>
  )
}

export default SortProduto;


const styles = StyleSheet.create({
  /*Sort Produto*/
  sortProduto:{
    flexDirection: "row",
    width: "95%",
    marginTop: 10,
    justifyContent: "space-between",
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: "#5D2A42",
  },
  botaoSort: {
    margin: 0.99,
    padding: 4,
    backgroundColor: "#FB6376",
    borderRadius: 8,
  },
})