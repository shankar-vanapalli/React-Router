import React, { Suspense } from "react";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import Featured from "./components/Featured";
import New from "./components/New";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Profile from "./components/Profile";
import { AuthProvider } from "./components/auth";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";

const LazyAbout = React.lazy(() => import("./components/About"));

export default function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <Suspense fallback="Loading....">
              <LazyAbout />
            </Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="products" element={<Products />}>
          <Route index element={<New />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
        </Route>
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}
