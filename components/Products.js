import { Text, SafeAreaView, StyleSheet, FlatList,Image,TouchableOpacity,Picker} from 'react-native';
 import {useState} from 'react'


export default function Products(props) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
    const products=[
        {
            id:1,
            categoria:"Celular",
            imagem:<Image style={styles.img} source={require('../assets/iphone.webp')}/>,
            title:'Apple iPhone 15 Pro Max (512 GB) — Titânio Azul \n',
            price:99.99,
        },
        {
            id:2,
            categoria:"Celular",
            imagem:<Image style={styles.img} source={require('../assets/iphone.webp')}/>,
            title:'Apple iPhone 15 Pro Max (512 GB) — Titânio Azul \n',
            price:999.99,
        },
        {
            id:3,
            categoria:"Roupa",
            imagem:<Image style={styles.img} source={require('../assets/iphone.webp')}/>,
            title:'Apple iPhone 15 Pro Max (512 GB) — Titânio Azul \n',
            price:999.99,
        },
        {
            id:4,
            categoria:"Computador",
            imagem:<Image style={styles.img} source={require('../assets/iphone.webp')}/>,
            title:'Apple iPhone 15 Pro Max (512 GB) — Titânio Azul \n',
            price:999.99,
        }
    ]
    function filter (categoria){
    
      setSelectedCategory(categoria)
    }
    function clear (limpar){
    
      setSelectedCategory(limpar)
      setSelectedPrice(limpar)
    }

    const filteredProducts = selectedCategory&&selectedPrice ? products.filter(p => p.categoria == selectedCategory&&p.price<selectedPrice) : selectedPrice  ? products.filter(p => p.price <= selectedPrice) : selectedCategory  ? products.filter(p => p.categoria == selectedCategory):products ;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
     
      <FlatList
          data={props.categoria}
          renderItem={({ item }) => <TouchableOpacity onPress={()=>filter(item)}>
          <Text>{item}</Text>
        </TouchableOpacity>}
          horizontal={true}
        />
        <TouchableOpacity onPress={()=>clear(null)}>
          <Text>Limpar</Text>
        </TouchableOpacity>
        <Picker 
         selectedValue={selectedPrice}
         onValueChange={(itemValue, itemIndex) =>{setSelectedPrice(itemValue)
           }}
          
          >
          {props.prices.map((element,index)=>{
            return(
 <Picker.Item key={index} label={element.rotulo}  value={element.value}/>
            )
          })}
        
      </Picker>
        <FlatList
          data={filteredProducts}
          renderItem={({ item }) => <SafeAreaView  style={styles.Produtos}><Text>{[item.imagem,]}</Text><Text style={styles.text}>{[item.title,item.price]}</Text></SafeAreaView>}
          horizontal={true}
        />
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'Wrap',
  },
  paragraph: {
    color: 'Black',
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'Wrap',
    marginRight: 10,
    marginTop:30,
    marginLeft:150,
    justifyContent: 'space-around',
    cursor:'pointer',
    position:'static'
  },
  img:{
    width:150,
    height:150,
    marginLeft:150,
    borderRadius:50
  },
  Produtos:{
    marginBottom:300,
  },
  text:{
    marginLeft:150,
    width:200
  },
  list:{
    width:250,
    height:250
  }
});