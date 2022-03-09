// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Zuri {
    constructor() {
        console.log("Hello World");
        storedData = 10;   // Using State variable
    }
    function fun1() public {
      console.log("This is a function 1");
    }
   function fun2() public {
     console.log("This is a function 2");
   }
   
    uint storedData;      // State variable
}