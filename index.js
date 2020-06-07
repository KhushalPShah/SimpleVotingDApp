
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
var account;
web3.eth.getAccounts().then((f) => {
    console.log(f[0])
    account = f[0];
})

abi = JSON.parse('[{"inputs":[{"internalType":"bytes32[]","name":"candidates","type":"bytes32[]"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"candidateList","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"candidate","type":"bytes32"}],"name":"countVoteFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"votesCandidateMap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')

contract = new web3.eth.Contract(abi);
contract.options.address = "0xF4838D1251C44E947dC5BFC1DB3EAf045E5890E9";
// update this contract address with your contract address

candidates = {"John Snow": "candidate-1", "Jamie Lanister": "candidate-2", "Dragon Queen": "candidate-3"}

function voteForCandidate(candidate) {
 candidateName = $("#candidate").val();
 console.log(candidateName);

 contract.methods.countVoteFor(web3.utils.asciiToHex(candidateName)).send({from: account}).then(() => {
    console.log("Here!");
    let div_id = candidates[candidateName];
        contract.methods.totalVotesFor(web3.utils.asciiToHex(candidateName)).call().then((f) => {
        console.log(f);
        $("#" + div_id).html(f);
    })
    })
}

$(document).ready(function() {
 candidateNames = Object.keys(candidates);

 for(var i=0; i<candidateNames.length; i++) {
 let name = candidateNames[i];
  
 contract.methods.totalVotesFor(web3.utils.asciiToHex(name)).call().then((f) => {
  $("#" + candidates[name]).html(f);
 })
 }
});

