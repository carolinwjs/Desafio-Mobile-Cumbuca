import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useState} from "react";

const InsereProduto = ({handleAddProduct}) => {
  const [error, setError] = useState("");

  /* Get Values from Fields*/
  const [nomeVl, setNomeVl] = useState("");
  const [qtdVl, setQtdVl] = useState(0);
  const [unitVl, setUnitVl] = useState(0);

  /*Handle Error*/
  const handlingErrorDisplay = () => {
    if(!isNaN(nomeVl) || nomeVl == "" || !nomeVl){
      setError("Há algo errado em Nome do Produto");
    }else {
      setError("");
      let regexPattern = /^-?[0-9]+$/;
      //regex para checar se é um numero inteiro ou não
      let result = regexPattern.test(qtdVl);
      if(isNaN(qtdVl) || qtdVl == "" || !qtdVl || qtdVl==0 || result==false){
        setError("Há algo errado em Qtd. em Estoque ");
      }else {
        setError("");
        if(isNaN(unitVl) || unitVl == "" || !unitVl || unitVl==0){
          setError("Há algo errado em Valor Unitário");
        }else {
          setError("");
          handleAddProduct(nomeVl, qtdVl, unitVl);
        }
      }
    }
  }

  return (
    <View style={styles.insereProduto}>
      <Text style={styles.titleinsereProduto}>Adicione um Produto na Lista</Text>
      {error && <Text style={styles.errorMessage}>{error}</Text>}
      <TextInput onChangeText={(newText)=>setNomeVl(newText)} style={styles.inputInsert1} placeholder={"Nome do Produto"} editable></TextInput>
      <View style={styles.insideInsereProduto}>
        <TextInput onChangeText={(newText)=>setQtdVl(newText)} style={styles.inputInsert2} placeholder={"Qtd. em Estoque"} editable></TextInput>
        <TextInput onChangeText={(newText)=>setUnitVl(newText)} style={styles.inputInsert3} placeholder={"Valor Unitário"} editable></TextInput>
      </View>
			<TouchableOpacity onPress={handlingErrorDisplay} style={styles.botaoInsert} ><Text style={styles.titleBotaoInsert}>Inserir Produto</Text></TouchableOpacity>
		</View>
  )
}

export default InsereProduto;


const styles = StyleSheet.create({
  /*Add Produto*/
  insereProduto: {
    marginTop: 10,
    width: "95%",
    borderRadius: 10,
    backgroundColor: "#FCB1A6",
    flexDirection: "column",
  },
  insideInsereProduto: {
    flexDirection: "row",
    justifyContent: "center",    
  },
  titleinsereProduto: {
    color: "#5D2A42",
    fontWeight: 640,
    fontSize: 21,
    margin: 8
  },
  errorMessage: {
    color: "#e71919",
    fontWeight: 650,
    fontSize: 18,
    textAlign: "center"
  },
  inputInsert1: {
    backgroundColor: "#fffffc", 
    margin: 8,
    padding: 10,
    borderRadius: 5,
    fontSize: 15,
  },
  inputInsert2: {
    backgroundColor: "#fffffc", 
    margin: 8,
    padding: 10,
    borderRadius: 5,
    fontSize: 15,
    width: "50%"
  },
  inputInsert3: {
    backgroundColor: "#fffffc", 
    margin: 8,
    padding: 10,
    borderRadius: 5,
    fontSize: 15,
    width: "50%"
  },
  botaoInsert: {
    padding:10,
    backgroundColor: "#FB6376",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    margin: 8,
  },
  titleBotaoInsert:{
    color: "#5D2A42",
    fontWeight: 600,
    fontSize:17
  }
})