import React from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import { Link, Route } from "react-router-dom";
import PrivateRoute from "./components/Protected";

function App() {
  return (
    <div className="App">
      <div>
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/public" component={""} />
        <Route path="/login" component={LoginForm} />
        <PrivateRoute path="/protected" component={PrivateRoute} />
      </div>
    </div>
  );
}

export default App;
