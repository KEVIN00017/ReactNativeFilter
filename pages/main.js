import { useContext } from 'react';
import { Text, SafeAreaView, StyleSheet,View,Image,FlatList } from 'react-native';
import { CartContext } from '../contexts/CartProvider';


 
export default function Main() {


  return (
    <SafeAreaView>
      <Text>EAE</Text>
  
      
    </SafeAreaView>

  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 0,
    marginLeft:50
 
  },
  header: {
    display: 'flex',
    alignSelf: 'start',
    marginBottom:100
  },
 Paragraph:{
  marginLeft:30
 },
  img:{
    width:150,
    height:150,
    borderRadius:50
  },
  abs:{
    position:'absolute'
  },
  Produtos:{
    marginBottom:300,
    
  }
});