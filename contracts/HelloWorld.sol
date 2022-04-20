// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./Greeter.sol";

contract HelloWorld {

    constructor() {
        Greeter greet = new Greeter("hello");

        greet.setGreeting("A New test");
    }

    function hello() public pure returns (string memory) {
        return "Hello, World! New contract";
    }

}