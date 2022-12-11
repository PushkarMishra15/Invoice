import { useState,useEffect } from "react";
import React from 'react'
import "./Employee.css"

const Employee=({state})=>{

const [Eaddress, setEaddress] = useState("");
const [account, setAccount] = useState("");
const [Estatus, setEstatus] = useState();

useEffect(() => {
    const getAccount = async () => {
      const { web3 } = state;
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      setAccount(accounts[0]);
    };

    state.web3 && getAccount();
  }, [state, state.web3]);

const getInputValue=(event)=>{
   
    const Eaddress=event.target.value;
    console.log(Eaddress);
    setEaddress(Eaddress);
   
 }    

const Submit_address=async()=>{
    const {contract}=state;
    
    try{
    await contract.methods.registerEmployee(Eaddress).send({from:account});
    console.log("Employee Registered !");
    setEstatus("You have been Registered !");
    }
    catch{
        setEstatus("You have already registered !");
    }
}
    
return(
    <>
    <div className="Econtainer1">
    <style>{'body { background-color:   #d6d5e7}'}</style>
    <div className="Econtainer">
        <div id="Eregister">

        Enter your address to Register 
        </div>
        <input type="text"  id="Eaddress"  onChange={getInputValue} size="50"/>
    </div>
    <button className="Ebtn" onClick={Submit_address}>Register</button>
    <div className="Estatus">
         {Estatus}
    </div>
    
    </div>

    </>
)
}

export default Employee;