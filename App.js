/*import { StatusBar } from 'expo-status-bar';*/
import {StyleSheet, TextInput, View, Text, TouchableOpacity,Alert} from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import BarraPesquisa from "./components/BarraDePesquisa";
import InsereProduto from "./components/InsereProduto";
import SortProduto from "./components/SortProduto";

export default function App() {
  const [produtos, setProdutos] = useState([]);
  const [errorFirst, setErrorFirst] = useState("");
  const [produtoSearch, setProdutoSearch] = useState(null);

  const readData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key');
      var userProdutos;
      jsonValue  != null ? userProdutos = JSON.parse(jsonValue) : setErrorFirst("Erro ao carregar os dados da APi de Async-Storage");
      if (userProdutos !== null) {
        setProdutos(userProdutos);
        return userProdutos;
      }
    } catch (e) {
      setErrorFirst("Erro ao carregar os dados da APi de Async-Storage");
    }
  }

  useEffect(() => {
    readData();
  }, []);

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@storage_Key', jsonValue);
    } catch (e) {
      setErrorFirst("Erro ao carregar a APi de Async-Storage");
    }
  }

  const addNovoProduto = (novoNome, novaQtd, novoVlUnit) => {
    if(produtos.length==0){
      const newArray = [...produtos, {id:1, nome: novoNome, vlunit: novoVlUnit,qtestoque: novaQtd, vltotal: novaQtd*novoVlUnit}];
      setProdutos(newArray);
      storeData(newArray);
    }else{
      let lastId = produtos[produtos.length-1].id; 
      const newestArray = [...produtos, {id:lastId+1, nome: novoNome, vlunit: novoVlUnit,qtestoque: novaQtd, vltotal: novaQtd*novoVlUnit}];
      setProdutos(newestArray);
      storeData(newestArray);
    }  
  }

  const deletaProduto = (id) => {
    const newArray = produtos.filter((produto) => (produto.id!=id));
    setProdutos(newArray);
    const lastArray = newArray.map(produto => (produto.id > id && produto.id!=id) ? { ...produto, id: produto.id-1} : produto);
    const newArray2 = produtoSearch.filter((produto) => (produto.id!=id));
    setProdutoSearch(newArray);
    const lastArray2 = produtoSearch.map(produto => (produto.id > id && produto.id!=id) ? { ...produto, id: produto.id-1} : produto);
    setProdutos(lastArray);
    setProdutoSearch(lastArray2);
    storeData(lastArray);
  }

  const aumentaQtd = (id) => {
    const newArray = produtos.map(produto => produto.id === id ? { ...produto, qtestoque: produto.qtestoque + 1, vltotal: ((produto.qtestoque + 1)*produto.vlunit).toFixed(2)} : produto);
    setProdutos(newArray);
    storeData(newArray);
  }

  const diminuiQtd = (id) => {
    const newArray = produtos.map(produto => produto.id === id ? { ...produto, qtestoque: produto.qtestoque - 1, vltotal: ((produto.qtestoque - 1)*produto.vlunit).toFixed(2)} : produto);
    const idRealValue = produtos.findIndex(produto => produto.id === id);
    if((newArray[idRealValue].qtestoque-1)<=0){
      deletaProduto(id);
    }else{
      setProdutos(newArray);
      storeData(newArray);
    }
  }

  const searchProduto = (searchNome) => {
    const copyArray = [...produtos];
    if (searchNome.length>0) {
      const arrayTemp = copyArray.filter((produto) => (produto.nome.toLowerCase().includes(searchNome.toLowerCase())==true));
      setProdutoSearch(arrayTemp);
    }else {
      setProdutoSearch(null);
    }
  }

  const sortBy = (content) => {
    if (content == "ID"){
      const newArray = [...produtos.sort((a, b) => a.id - b.id)];
      return setProdutos(newArray);
    }else  if (content == "Nome"){
      const newArray = [...produtos.sort((a, b) => a.nome.localeCompare(b.nome))];
      return setProdutos(newArray);
    }else  if (content == "Estoque"){
      const newArray = [...produtos.sort((a, b) => a.qtestoque - b.qtestoque)];
      return setProdutos(newArray);
    }else  if (content == "Val. Unit"){
      const newArray = [...produtos.sort((a, b) => a.vlunit - b.vlunit)];
      return setProdutos(newArray);
    }else  if (content == "Val. Total"){
      const newArray = [...produtos.sort((a, b) => a.vltotal - b.vltotal)];
      return setProdutos(newArray);
    }
  }

	return (
		<View style={styles.body}>
			<BarraPesquisa handleDisplayPesquisa={searchProduto}/>
      {errorFirst && <Text style={styles.errorMessage}>{errorFirst}</Text>}
      <InsereProduto handleAddProduct={addNovoProduto}/>
      {produtoSearch && <Text style={styles.titleinsereProduto}>Resultado Search</Text>}
      {produtoSearch &&<SortProduto funDelete={deletaProduto} funAumenta={aumentaQtd} funDiminui={diminuiQtd} handleTouch={sortBy} listaProdutos={produtoSearch}/>}
      <Text style={styles.titleinsereProduto}>Lista completa</Text>
      <SortProduto funDelete={deletaProduto} funAumenta={aumentaQtd} funDiminui={diminuiQtd} handleTouch={sortBy} listaProdutos={produtos}/>
		</View>
	);
}

const styles = StyleSheet.create({
  /*BODY*/
	body: {
		backgroundColor: "#fffffc",
    width: "100%",
    height: "100%",
    alignItems: "center",
    fontFamily: 'Inter',
    flexDirection:"column"
		
	},
  titleinsereProduto: {
    color: "#5D2A42",
    fontWeight: 640,
    fontSize: 21,
    margin: 8
  },
});
