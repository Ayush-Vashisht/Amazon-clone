import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function App() {
  const [{},dispatch]=useStateValue();
  
  useEffect(()=>{
  auth.onAuthStateChanged(authUser=>{
    if(authUser){
      dispatch({
        type:"SET_USER",
        user:authUser
      })
    }
    else {
      dispatch({
        type:"SET_USER",
        user:null
      })
    }
  })
  },[])
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
