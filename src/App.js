import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Blogs from './Components/Blogs/Blogs';
import Notfound from './Components/Notfound/Notfound';
import Signup from './Components/Signup/Signup';
import RequitAuth from './Components/RequirAuth/RequirAuth';
import InventoryDetails from './Components/InventoryDetails/InventoryDetails';
import ManageInventories from './Components/ManageInventories/ManageInventories';
import AddItems from './Components/AddItems/AddItems';
import Opinion from './Components/Opinion/Opinion';
import MyItems from './Components/MyItems/MyItems';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/additems' element={
          <RequitAuth>
            <AddItems></AddItems>
          </RequitAuth>
        }></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequitAuth>
            <InventoryDetails></InventoryDetails>
          </RequitAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequitAuth>
            <MyItems></MyItems>
          </RequitAuth>
        }></Route>
        <Route path='/manageinventories' element={
          <RequitAuth>
            <ManageInventories></ManageInventories>
          </RequitAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/opinion' element={<Opinion></Opinion>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
