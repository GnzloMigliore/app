 import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CartProvider from "./components/CartProvider";
import Cart from "./components/Cart";
import FormContainer from "./components/FormContainter";
 const App = () => {

 return(
  <CartProvider>
   <BrowserRouter>
    
     <NavBar />
       <Switch>
         <Route path="/category/:prod_id" >
           <ItemListContainer/>
         </Route>
         <Route path="/category/:prod_id" exact>
           <ItemListContainer />
         </Route>
         <Route path="/category/:prod_id" >
           <ItemListContainer />
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
        <Route path="/FormContainer">
          <FormContainer/>
        </Route>
       
       </Switch>
  
         
   </BrowserRouter>
</CartProvider>
    )}
 export default App;