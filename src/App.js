import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Home from "./components/Home";
// import Header from "./components/Header.js"
import PrivateRoute from "./components/routing/PrivateRoute"
import Login from "./components/Authenticating/Authentication.js";
import SignUp from "./components/SignUp.js";
import Quiz from "./components/Quiz.js";
import Header from "./components/Header"; 
import Chat from "./components/Chat"

function App(userState) {
  const userID = userState;
  console.log("User: " + userID)
  return (
    <div className="App">
      <Router>
        <div className="wrapper">
          <Header/>
          <div className="routes">
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/chat" component={Chat}/>
            <PrivateRoute exact path="/quiz" component={Quiz}/>
          </div>
       
        </div>
      </Router>
    </div>
  );
}



export default App;
