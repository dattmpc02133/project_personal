import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '~/pages/Home';
import Shop from '~/pages/Shop';
import Cart from '~/pages/Cart';
import ProductDetails from '~/pages/ProductDetails';
import Checkout from '~/pages/Checkout';
import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import ProtectedRouter from './ProtectedRouter';

import AddProducts from '~/admin/AddProducts';
import AllProducts from '~/admin/AllProducts';
import Dashboard from '~/admin/Dashboard';
import Users from '~/admin/Users';
import EditProduct from '~/admin/EditProduct';
const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="home" />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="shop" element={<Shop />}></Route>
            <Route path="shop/:id" element={<ProductDetails />}></Route>
            <Route path="cart" element={<Cart />}></Route>

            <Route path='/*' element={<ProtectedRouter/>}>
                <Route path="checkout" element={<Checkout/>}/>
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="dashboard/all-products" element={<AllProducts/>}/>
                <Route path="dashboard/add-products" element={<AddProducts/>}/>
                <Route path="dashboard/users" element={<Users/>}/>
                <Route path="dashboard/edit/:id" element={<EditProduct/>}/>
            </Route>

            <Route path="login" element={<Login />}></Route>
            <Route path="signup" element={<Signup />}></Route>
        </Routes>
    );
};

export default Routers;
