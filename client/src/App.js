import React, { useState, useEffect } from "react";
import getWeb3 from "./getWeb3";
import Em_trans from "./contracts/Em_trans.json";
import Navbar from "./Components/Navbar";
import Manager from "./Components/Manager";
import Employee from "./Components/Employee";
import Intro from "./Components/Intro";
// import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
const App = () => {
  const [state, setState] = useState({
    web3: null,
    contract: null,
  });

  const [address, setaddress] = useState();
  useEffect(() => {
    const init = async () => {
      try {
        const web3 = await getWeb3();
        const networkId = await web3.eth.net.getId();

        const deployedNetwork = Em_trans.networks[networkId];
        console.log("Contract Address:", deployedNetwork.address);
        setaddress(deployedNetwork.address);
        const instance = new web3.eth.Contract(
          Em_trans.abi,
          deployedNetwork && deployedNetwork.address
        );
        setState({ web3, contract: instance });
      } catch (error) {
        alert("Falied to load web3 or contract.");
        console.log(error);
      }
    };
    init();
  }, []);

  return (
    <Router>
    <div className="App">
       <Navbar/>

       <Switch>
        
       <Route exact path="/">
       <Intro state={state}/>
       </Route>

       <Route exact path="/manager">
       <Manager state={state} address={address}/>
       </Route>

       <Route path="/employee">
       <Employee state={state}/>
       </Route>
 
       </Switch>
    </div>
    </Router>
  );
};
export default App;
