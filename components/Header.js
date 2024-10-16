import { Text, SafeAreaView, StyleSheet, FlatList,TouchableOpacity} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
export default function Header(props) {
  const navigation=useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        <FlatList
          data={props.links}
          renderItem={({ item }) => <Text style={styles.paragraph}>{item}</Text>}
          horizontal={true}
          
        />
    <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>  <Entypo name="shopping-cart" size={24} color="black" style={styles.paragraph}/></TouchableOpacity> 
    <TouchableOpacity>   <Entypo name="magnifying-glass" size={24} color="black" style={styles.paragraph}/></TouchableOpacity>
     <TouchableOpacity>  <FontAwesome name="user-circle" size={24} color="black" style={styles.paragraph} /></TouchableOpacity>
      </Text>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'Wrap',
  },
  paragraph: {
    color: 'black',
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'Wrap',
    marginRight: 10,
    marginTop:70,
    justifyContent: 'space-around',
    cursor:'pointer',
    marginLeft:100,
  },
});