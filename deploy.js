// The Script in itself throws an error, however when individual steps are run
// inside the node command CLI, then they do work properly.

// Step 1
Web3 = require('web3')
fs = require('fs')

// Step 2
web3 = new Web3("http://localhost:8545")
web3.eth.getAccounts(console.log)

// Step 3
byteCode = fs.readFileSync('simpleVotingContract_sol_MyVotingContract.bin').toString();

// Step 4
abi = JSON.parse(fs.readFileSync('simpleVotingContract_sol_MyVotingContract.abi').toString());


// Step 5
deployedContract = new web3.eth.Contract(abi);
candidates = ['John Snow','Jamie Lanister', 'Dragon Queen'];
deployedContract.deploy({
    data : byteCode,
    arguments : [candidates.map(name => web3.utils.asciiToHex(name))]
}).send({
    from : '0x713E5272f7EB094CF17d73399F741598580eCfA4',
    gas : 1500000,
    gasPrice : web3.utils.toWei('0.00003','ether')
}).then((newContractInstance) => {
    deployedContract.options.address = newContractInstance.options.address;
    console.log("Blockchain Address : " + newContractInstance.options.address);
})

// Step 6
deployedContract.methods.totalVotesFor(web3.utils.asciiToHex('John Snow')).call(console.log)

// Step 7
deployedContract.methods.countVoteFor(web3.utils.asciiToHex('John Snow')).send({
    from : '0x713E5272f7EB094CF17d73399F741598580eCfA4'
}).then((f) => {
    console.log(f);
})

// Step 8
deployedContract.methods.totalVotesFor(web3.utils.asciiToHex('John Snow')).call(console.log)

