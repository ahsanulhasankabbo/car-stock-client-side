import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import Blogs from './Components/Blogs/Blogs';
import Notfound from './Components/Notfound/Notfound';
import Signup from './Components/Signup/Signup';
import RequitAuth from './Components/RequirAuth/RequirAuth';
import InventoryDetails from './Components/InventoryDetails/InventoryDetails';
import ManageInventories from './Components/ManageInventories/ManageInventories';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={
          <RequitAuth>
            <Inventory></Inventory>
          </RequitAuth>
        }></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequitAuth>
            <InventoryDetails></InventoryDetails>
          </RequitAuth>
        }></Route>
  
        <Route path='/manageinventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
