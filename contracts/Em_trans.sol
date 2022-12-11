// SPDX-License-Identifier: MIT
pragma solidity >= 0.5.22 <0.9.0;
 
contract Em_trans{

address payable[] public emp;
address payable public manager;

constructor(){
    manager=payable(msg.sender);
}
receive() external payable{}

function registerEmployee(address _emaddress) public {
    uint flag=1;
   for(uint256 j=0;j<emp.length;j++)
    if(emp[j]==_emaddress){
        flag=0;
    }
    if(flag==1)
    emp.push(payable(_emaddress));
    else
    revert();
}

function transferSalary() public payable{
    require(msg.sender==manager,"You are not the manager");
    // require(msg.value>0 ether ,"The required amount is not met");
    for(uint i=0; i<emp.length;i++){
       
        emp[i].transfer(2 ether);
        
    }
}

function getEmployee() public view returns(address payable[] memory){
    return emp;
}
}

//1st Test

//contract address:    0x42aF1bC5F4DB237d0E3a268d03e00F9668EC968B
//account:             0x363f7dd011FC3dA9654C5BfAD2B83878B242C74B

//2nd Test 

//contract address:    0x16399199fA9bBBe4f67557eE2213209BdC6424bD
//account:             0xE7E6F306F425E8c67a07AFC30C259bfd58482Aa1

//3rd Test 

//contract address:    0xEF79eC44DCc7e75047b1B891Dab87008B6Cc0001
//account:             0xE7E6F306F425E8c67a07AFC30C259bfd58482Aa1

//4th Test 
//contract address:    0x27B4c1cE18B40eE11F6427E1788DD6f32C2C0efd
//account:             0xE7E6F306F425E8c67a07AFC30C259bfd58482Aa1

//5th Test
//contract address:    0x335A2A6D8858BC6e0c44BfDE45A773a595406A49

//6th Test 
//contract address:    0x0Fc351c5Cd93baC4B280c48fBC0B181C996Cd289

//7th Test
//contract address:    0x0883AEAd5CE3Fec31f68A9874dda5A94579AD912

//8th Test 
//contract address:    0xC8B41240D0F278166a9E68e1b8c5CD456688a896

//9th Teast
//contract address:    0xF8A5C25C9bF699CBd5c56e33670809b6C133Eb0B