import { useContext } from 'react';
import { Text, SafeAreaView, StyleSheet,View,Image,FlatList } from 'react-native';
import { CartContext } from '../contexts/CartProvider';


 
export default function Cart() {
 const [Produt,SetProdut]=useContext(CartContext)
 console.log("Carrinho:",Produt)
  return (
    <SafeAreaView>
      <Text>EAE</Text>
      <FlatList
          data={Produt}
          renderItem={({ item }) => <SafeAreaView  style={styles.Produtos}><Text>{[item.imagem,]}</Text><Text style={styles.text}>{[item.title,item.price]}
          </Text>
          </SafeAreaView>
          }
          horizontal={true}
        />
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