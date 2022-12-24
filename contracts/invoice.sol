// SPDX-License-Identifier: MIT
pragma solidity >= 0.5.22 <0.9.0;

contract invoice {

    address public manager;
    
    struct Invoice{
     
     address buyer;
     address payable seller;
     string buyerPan;
     string sellerPan;
     string data;
     uint amount;
     uint id;
    }
    
    constructor(){
     manager = msg.sender;
    }
    
    receive() external payable{
        
    }

     mapping(uint=>Invoice) public requests;
     uint public tran_request;

    function Tranct(uint _id, string memory _buyerPan, string memory _sellerPan, address payable _seller, uint _amount, string memory _data)public payable {

        require(msg.sender!=manager, "Manager can't initiate transaction");
        Invoice storage newtransaction = requests[tran_request];
        tran_request++;
        newtransaction.buyerPan=_buyerPan;
        newtransaction.sellerPan=_sellerPan;
        newtransaction.data=_data;
        newtransaction.amount=_amount;
        newtransaction.buyer= msg.sender;
        newtransaction.seller=_seller;
        newtransaction.id=_id;
        requests[_id]=newtransaction;
        
        _seller.transfer(_amount);
        
    }
    function getrequest(uint _id) public view returns(Invoice memory){
         
         return requests[_id];

    }

}


   // contract address:    0xABb500f36f1702e0A1301887eb493a8D34D9068A
//account:             0x707B4463e7e16E5A0E2B948F35a88366C1d02560