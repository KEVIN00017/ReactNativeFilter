import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/index.js";
import Cart from "./pages/cart.js";
import CartProvider from "./contexts/CartProvider.js";
import Main from "./pages/main.js";
const Stack=createStackNavigator();

function App(){
    return(
        <NavigationContainer>
            <CartProvider>
           <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Cart" component={Cart}/>
                <Stack.Screen name="eae" component={Main}/>
           </Stack.Navigator>
           </CartProvider>
        </NavigationContainer>
    )
}
export default App