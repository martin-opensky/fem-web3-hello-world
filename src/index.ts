import { ethers } from "ethers";

function getMetaMask() {
    // @ts-ignore
    return window.ethereum;
}

async function hasSigners() : Promise<boolean> {
    const metamask = getMetaMask();
    const signers = await (metamask.request({method: 'eth_accounts'}) as Promise<string[]>);
    return signers.length > 0;
}

async function requestAccess() : Promise<boolean> {
    const metamask = getMetaMask();
    const accounts = await (metamask.request({method: 'eth_requestAccounts'}) as Promise<string[]>);

    return accounts && accounts.length > 0;
}

async function getContract() {
    const address = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";

    if (!(await hasSigners()) && !(await requestAccess())) {
        console.log("You are in trouble, no one wants to play");
    }

    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const contract = new ethers.Contract(
        address,
        [
            "function hello() public pure returns(string memory)",
        ], // abi
        provider
    );

    console.log("We have done it, time to call");

    document.body.innerHTML = await contract.hello();
}

getContract();