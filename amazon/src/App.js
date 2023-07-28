import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Orders from "./Orders";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import {loadStripe} from "@stripe/stripe-js";
import{Elements} from "@stripe/react-stripe-js";

const promise=loadStripe("pk_test_51NXR6TSGdaxPg8QP7OVUwduiaCYHdm9vDBSFnHv2Ypu88X6UxjpD0RwhUwtHs6Vo5fLjLCDi09zpSIGN9m7F5GNJ00W6RgBYMd");
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/Login"
            element={
              <div>
                <Login />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Home />
              </div>
            }
          />

          <Route
            path="/Checkout"
            element={
              <div>
                <Header />
                <Checkout />
              </div>
            }
          />
          <Route
            path="/Payment"
            element={
              <div>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
                
              </div>
            }
          />
          <Route
            path="/Orders"
            element={
              <div>
                <Header />
                <Orders />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
