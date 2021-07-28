 import NavBar from "./components/NavBar"
 import ItemCounter from "./components/ItemCount"
 

 const App = () => {

 return(
 <>
 <NavBar />
 <ItemCounter  stock={20} initial={1}/>
 
 </>
    )}
 export default App;