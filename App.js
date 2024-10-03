import { Text, SafeAreaView, StyleSheet,View,Image } from 'react-native';
import { StatusBar } from 'react-native';
import Header from './components/Header.js';
import Products from './components/Products.js';

 
export default function App() {
 
 
  return (
    <SafeAreaView>
    <SafeAreaView style={styles.container}>    
      <View style={styles.header}>
      <Header
      style={styles.abs}
        links={['Home','Itens','Profile']}
      />

      </View>
      <StatusBar />
    </SafeAreaView>
    <View>
        <Products
        categoria={['Celular','Computador','Roupa']}
        prices={[{rotulo:"Até 100$",value:100},{rotulo:"Até 1000$",value:1000}]}
        />
      </View>
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
 