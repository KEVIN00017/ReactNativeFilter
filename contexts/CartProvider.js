import { createContext,useState } from "react";

export const CartContext=createContext()

function CartProvider({children}){
const [Produt,SetProdut]=useState([]);
console.log("Carrinho Renovado:",Produt)
return(
<CartContext.Provider value={[Produt,SetProdut]}>
    {children}
</CartContext.Provider>
)
}

export default CartProvider