import React, { useState, useEffect } from "react";
import getWeb3 from "./getWeb3";
import invoice from "./contracts/invoice.json";
import Navbar from "./Components/Navbar";
import Invoice from "./Components/Invoice";
import Buyer from "./Components/Buyer";
// import Intro from "./Components/Intro";
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

        const deployedNetwork = invoice.networks[networkId];
        console.log("Contract Address:", deployedNetwork.address);
        setaddress(deployedNetwork.address);
        const instance = new web3.eth.Contract(
          invoice.abi,
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

       <Route exact path="/invoice">
       <Invoice state={state} />
       </Route>

       <Route path="/">
       <Buyer state={state} address={address}/>
       </Route>
 
       </Switch>
    </div>
    </Router>
  );
};
export default App;
