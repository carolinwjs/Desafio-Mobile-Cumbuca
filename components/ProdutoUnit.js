import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons'; 
import React, {useState} from "react";

const ProdutoUnit = ({produto, funDelete, funAumenta, funDiminui}) => {
  return (
    <View style={styles.unitProduto}>
      <View style={styles.firstProdRow}>
        <Text style={styles.titleProduto}>{produto.nome} </Text>
        <Text style={styles.descProduto}>Valor Total: {produto.vltotal} </Text>
        <Text style={styles.descProduto}>Estoque: 
        <TouchableOpacity style={styles.changeQtd} >
          <AntDesign name="caretup" size={16} color="#FB6376" onPress={() =>
    funAumenta(produto.id)}/>
        </TouchableOpacity>{produto.qtestoque}
        <TouchableOpacity style={styles.changeQtd} onPress={() =>
    funDiminui(produto.id)}>
          <AntDesign name="caretdown" size={16} color="#FB6376" />
        </TouchableOpacity></Text>
        <Text style={styles.descProduto}>Valor Unitário.: {produto.vlunit}</Text>
      </View>
      <View style={styles.secProdRow}>
        <TouchableOpacity onPress={() =>
    funDelete(produto.id)} style={styles.botaoDelete} ><Text style={styles.textBotaoDelete}>Deletar</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default ProdutoUnit;

const styles = StyleSheet.create({
  /*ProdutoList-Unidade*/
  unitProduto: {
    margin:5,
    padding: 10,
    backgroundColor: "#5D2A42",
    borderRadius: 12,
    flexDirection: "row"
  },
  titleProduto: {
    color: "#FFF9EC",
    fontSize: 19,
    fontWeight: 650,
  },
  descProduto: {
    color: "#FFF9EC", 
    fontSize: 17,
    fontWeight: 600
  },
  changeQtd: {
    margin: 4,
    padding: 4,
    backgroundColor: "#FFDCCC",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center"
  },
  firstProdRow:{
    width: "60%"
  },
  secProdRow:{
    width: "40%"
  },
  botaoDelete: {
    padding: 5,
    backgroundColor: "#CE2D4F",
    borderRadius: 6,
    width: "55%",
    alignItems: "center",
    marginLeft: "45%"
  },
  textBotaoDelete: {
    color: "#FFF",
    fontWeight: 600,
    fontSize: 15,
  }
})