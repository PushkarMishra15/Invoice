import { useState,useEffect } from "react";
import React from 'react';
import  "./Invoice.css";

const Manager=({state})=>{

const [account, setaccount] = useState()
const [amount, setamount] = useState("NA")
const [data, setdata] = useState("NA")
const [buyer, setbuyer] = useState("NA")
const [seller, setseller] = useState("NA")
const [sellerPan, setsellerPan] = useState("NA")
const [buyerPan, setbuyerPan] = useState("NA")
const [Id, setId] = useState()

useEffect(()=>{
    
    const getAccount =async()=>{
       
        const { web3 }=state;
        const accounts= await web3.eth.getAccounts();
        console.log(accounts);
        setaccount(accounts[0]);
     
       
    };
    state.web3 && getAccount();
},[state,state.web3]);

const getID=((event)=>{
   setId(event.target.value);
})

const getRequest=async(event)=>{
    
    const {contract}=state;

        await contract.methods.getrequest(Id).call({from:account}).then(function(res){
        console.log("Your request gas been approved")
        console.log(res.amount);
       
        setbuyer(res.buyer);
        setbuyerPan(res.buyerPan);
        setsellerPan(res.sellerPan);
        setseller(res.seller);
        setamount(res.amount);
        setdata(res.data);

    }).catch((err)=>{
        console.log("Can't be shown",err)
    });
 

}


return(
<>
 <div className="container2">
 <style>{'body { background-color:   #d6d5e7}'}</style>
       <div className="REmployee">
       <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label-invoice">Enter the Id here </label>
          <input type="email" className="form-control" id="exampleInputEmail1" onChange={getID} aria-describedby="emailHelp" />
        </div>
    <div className="Invoice">
    <div className="Invoicedata">

    <div className="buyerPan">Buyer Pan :</div>
    <div className="sellerPan">Seller Pan :</div>
    <div className="sellerAddress"> Seller Address :</div>
    <div className="buyerAddress">Buyer Address :</div>
    <div className="amount"> Amount : </div> 
    <div className="data"> Message : </div> 
    
    </div>
    <div className="InvoicedataI">
       <p id="buyerPanI"> {buyerPan} </p>
       <p id="sellerPanI">{sellerPan} </p>
       <p id="sellerI">{seller}  </p>
       <p id="buyerI"> {buyer}  </p>
       <p id="amountI">{amount}</p>
       <p id="dataI">{data}</p>
       </div>
       </div>
       <div className="getrequest">
        <button type="button" className="Transfer" onClick={getRequest} >Get Request</button>
        </div>
        
        </div>
 </div>
</>
);
};

export default Manager;

