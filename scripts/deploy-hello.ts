import { ethers } from "hardhat";

async function deploy() {
  
  // We get the contract to deploy
  const HW = await ethers.getContractFactory("HelloWorld");
  const hello = await HW.deploy();

  await hello.deployed();

  console.log("HW deployed to:", hello.address);

  return hello;
}

// @ts-ignore
async function sayHello(hello) {
  console.log("Say Hello:", await hello.hello());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
deploy().then(sayHello).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
