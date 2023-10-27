import "./App.css";
import Login from "./pages/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/" component={Dashboard} />
      </BrowserRouter>
    </div>
  );
}

export default App;
