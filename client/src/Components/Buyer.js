import { useState,useEffect } from "react";
import React from 'react';
import "./Buyer.css";

const Buyer=({state,address})=>{

const [Idnum, setIdnum] = useState("")
const [BuyerPan, setBuyerPan] = useState("");
const [SellerPan, setSellerPan] = useState("");
const [SellerAddress, setSellerAddress] = useState("");
const [Amount, setAmount] = useState("");
const [Message, setMessage] = useState("");
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

  const getIdnumber=(event)=>{
   
    const Idnum=event.target.value;
    console.log(Idnum);
    setIdnum(Idnum);
   
 }   

const getBuyerPanValue=(event)=>{
   
    const BuyerPan=event.target.value;
    console.log(BuyerPan);
    setBuyerPan(BuyerPan);
   
 }   
 const getSellerPanValue=(event)=>{
   
    const SellerPan=event.target.value;
    console.log(SellerPan);
    setSellerPan(SellerPan);
   
 }     
 const getSellerAddress=(event)=>{
   
    const SellerAddress=event.target.value;
    console.log(SellerAddress);
    setSellerAddress(SellerAddress);
   
 }     
 const getAmount=(event)=>{
   
    const Amount=event.target.value;
    console.log(Amount);
    setAmount(Amount);
   
 }
 const getMessage=(event)=>{
   
    const Message=event.target.value;
    console.log(Message);
    setMessage(Message);
   
 }    

const Submit_Request=async()=>{
    const {contract}=state;
    
    try{
    await contract.methods.Tranct( Idnum, BuyerPan, SellerPan, SellerAddress, Amount, Message ).send({from:account});
    console.log("Information Registered !");
    setEstatus("You have been Registered !");
    }
    catch{
        setEstatus("Something went wrong !");
    }
}
    
return(
    <>
    <div className="Econtainer1">
    <style>{'body { background-color: #d6d5e7}'}</style>
    <div className="Econtainer">
        <div id="Eregister">
      <form>
      <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">ID Number</label>
          <input type="email" className="form-control" id="exampleInputEmail1" onChange={getIdnumber} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Buyer Pan</label>
          <input type="email" className="form-control" id="exampleInputEmail1" onChange={getBuyerPanValue} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Seller Pan</label>
          <input type="email" className="form-control"  id="exampleInputPassword1" onChange={getSellerPanValue}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Seller Address</label>
          <input type="text" className="form-control" id="exampleInputPassword1" onChange={getSellerAddress} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Amount</label>
          <input type="number" className="form-control" id="exampleInputPassword1" onChange={getAmount}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
          <input type="text" className="form-control" id="exampleInputPassword1" onChange={getMessage}/>
        </div>
        <div className="contract">
            Pay Amount to this Contract   </div><div className="address">{address}</div>
      </form>
        
        </div>
    </div>
    <button className="Ebtn" onClick={Submit_Request}>Transact</button>
    <div className="Estatus">
         {Estatus}
    </div>
    
    </div>

    </>
)
}

export default Buyer;