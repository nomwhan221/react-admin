import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./pages/users/Users";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserCreate from "./pages/users/UserCreate";
import UserEdit from "./pages/users/UserEdit";
import Roles from "./pages/roles/Roles";
import RoleCreate from "./pages/roles/RoleCreate";
import RoleEdit from "./pages/roles/RoleEdit";
import ProductCreate from "./pages/products/ProductCrate";
import ProductEdit from "./pages/products/ProductEdit";
import Products from "./pages/products/Products";
import Orders from "./pages/orders/Orders";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} Component={Dashboard} />
          <Route path={"/profile"} Component={Profile} />
          <Route path={"/register"} Component={Register} />
          <Route path={"/login"} Component={Login} />
          <Route path={"/users"} Component={Users} />
          <Route path={"/users/create"} Component={UserCreate} />
          <Route path={"/users/:id/edit"} Component={UserEdit} />
          <Route path={"/roles"} Component={Roles} />
          <Route path={"/roles/create"} Component={RoleCreate} />
          <Route path={"/roles/:id/edit"} Component={RoleEdit} />
          <Route path={"/products"} Component={Products} />
          <Route path={"/products/create"} Component={ProductCreate} />
          <Route path={"/products/:id/edit"} Component={ProductEdit} />
          <Route path={"/orders"} Component={Orders} />
          {/* <Route path={"/orders/create"} Component={ordercre} />
          <Route path={"/orders/:id/edit"} Component={ProductEdit} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
