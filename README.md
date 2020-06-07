# SimpleVotingDApp
A simple Ethereum based D-App for Voting.
This creates a tamper-proof way of voting the candidates contesting the elections.

## How to Vote
> The HTML Page displays the candidates list.
> You can enter the name of the candidate in the text box and then click on the 'Vote' button. 
> This will increment the vote count for that candidate and update the same.

## How does the D-App work ?
> Ganache is used to build a dummy blockchain and deploy it on the localhost.
> It creates 10 dummy accounts, with 100 Ethers each.
> The Node environment, with the Web3 plugin, is used to interact with the blockchain via the RPC.
> The Smart contract is written in Solidity.
> This voting contract is then compiled, and deployed onto the blockchain by one of the dummy accounts created by Ganache.
> Also, the compiler provides with an Application Binary Interface (ABI), which is called from the Node environment to call the methods of the Voting contract.

## Technologies Used:
> Ganache.
> Node JS with Web3.
> Solidity.


