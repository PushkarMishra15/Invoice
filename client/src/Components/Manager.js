import { useState,useEffect } from "react";
import React from 'react';
import  "./Manager.css";

const Manager=({state,address})=>{

const [account, setaccount] = useState()
const [registeredemployee, setregisteredemployee] = useState([])
const [result, setresult] = useState("Salary Not Transfered");

useEffect(()=>{
    
    const getAccount =async()=>{
       
        const { web3 }=state;
        const accounts= await web3.eth.getAccounts();
        console.log(accounts);
        setaccount(accounts[0]);
       
    };
    state.web3 && getAccount();
},[state,state.web3]);


useEffect(()=>{

    const Registered_Employee = async()=>{
     
       const {contract}=state;
       const employee = await contract.methods.getEmployee().call();
       const registeredEmployee = await Promise.all(
        
       employee.map((empl)=>{
            return empl;
        })
     )
     console.log(registeredEmployee);
     setregisteredemployee(registeredEmployee);

    } 
      state.contract && Registered_Employee();
   },[state,state.contract]);

    const Transfer_Salary=async()=>{
        const {contract}=state;
       try{
        
        await contract.methods.transferSalary().send({from:account});
        setresult("Salary Transfered");
       }
       catch(e){
        if(e.message.includes("You are not the manager"));{
            setresult("You are not the manager");
        }
       }
    }

return(
<>
 <div className="container2">
 <style>{'body { background-color:   #d6d5e7}'}</style>
       <div className="REmployee">
       <div className="REmplo">Registered Employees
       </div>
       <div className="EmpList">
        
       {registeredemployee!==0 && registeredemployee.map((name)=> <p key={name}>{name}</p>)}</div>
       </div>
       <button type="button" className="Transfer" onClick={Transfer_Salary}>Transfer Salary</button>
     
       <div className="contract_address">
        Contract Address  
       </div>
       <div className="address">{address}</div>

       <div className="status">
         Status - {result} 
       </div>
      
 </div>
</>
);
};

export default Manager;

