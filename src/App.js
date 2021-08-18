 import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CartProvider from "./components/CartProvider";
import Cart from "./components/Cart";
 const App = () => {

 return(

   <BrowserRouter>
     <CartProvider>
     <NavBar />
       <Switch>
         <Route path="/category/:id" >
           <ItemListContainer/>
         </Route>
         <Route path="/category/:id" exact>
           <ItemListContainer />
         </Route>
         <Route path="/category/:id">
           <ItemListContainer/>
         </Route>
         <Route path="/"exact>
           <ItemListContainer/>
         </Route>
         <Route path="/item/:id">
          <ItemDetailContainer/>
        </Route>
        <Route path="/Cart">
          <Cart/>
        </Route>
       </Switch>
       </CartProvider>
</BrowserRouter>

    )}
 export default App;