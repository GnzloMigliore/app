 import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
 

 const App = () => {

 return(
   <BrowserRouter>
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
       </Switch>
</BrowserRouter>
    )}
 export default App;