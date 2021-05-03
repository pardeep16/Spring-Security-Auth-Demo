import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import  LoginPage from './pages/LoginPage';
import { Dashboard } from './pages/dashboard/dashboard';


function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
