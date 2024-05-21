document.addEventListener('DOMContentLoaded', () => {
  if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.request({ method: 'eth_requestAccounts' }).catch((err) => {
          console.error('User denied account access', err);
      });
  } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
  } else {
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
  }
});

async function connectWallet() {
  if (!window.web3) {
      alert('Please install MetaMask!');
      return;
  }

  try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      document.getElementById('walletAddress').innerText = `Wallet Address: ${account}`;
      console.log('Wallet connected:', account);
  } catch (error) {
      console.error('Error connecting to wallet:', error);
      alert('Failed to connect to MetaMask');
  }
}

async function addToken() {
  const tokenId = document.getElementById('addTokenId').value;
  const resultElement = document.getElementById('addTokenResult');

  if (!window.web3) {
      resultElement.innerText = 'Please install MetaMask!';
      return;
  }

  const contract = new window.web3.eth.Contract(abi, contractAddress);
  const accounts = await window.web3.eth.getAccounts();
  const account = accounts[0];

  try {
      await contract.methods.addToken(tokenId).send({ from: account });
      resultElement.innerText = 'Token added successfully!';
  } catch (error) {
      console.error(error);
      resultElement.innerText = 'Error adding token!';
  }
}

async function scanToken() {
  const tokenId = document.getElementById('verifyTokenId').value;
  const resultElement = document.getElementById('scanResult');

  if (!window.web3) {
      resultElement.innerText = 'Please install MetaMask!';
      return;
  }

  const contract = new window.web3.eth.Contract(abi, contractAddress);
  const accounts = await window.web3.eth.getAccounts();
  const account = accounts[0];

  try {
      await contract.methods.scanToken(tokenId).send({ from: account });
      resultElement.innerText = 'Token is valid!';
  } catch (error) {
      console.error(error);
      resultElement.innerText = 'Invalid token or already claimed!';
  }
}

async function getTokenFinder() {
  const tokenId = document.getElementById('getTokenFinderId').value;
  const resultElement = document.getElementById('tokenFinderResult');

  if (!window.web3) {
      resultElement.innerText = 'Please install MetaMask!';
      return;
  }

  const contract = new window.web3.eth.Contract(abi, contractAddress);

  try {
      const finder = await contract.methods.getTokenFinder(tokenId).call();
      resultElement.innerText = `Token finder: ${finder}`;
  } catch (error) {
      console.error(error);
      resultElement.innerText = 'Error retrieving token finder!';
  }
}

async function getTokenCount() {
  const userAddress = document.getElementById('getTokenCountAddress').value;
  const resultElement = document.getElementById('tokenCountResult');

  if (!window.web3) {
      resultElement.innerText = 'Please install MetaMask!';
      return;
  }

  const contract = new window.web3.eth.Contract(abi, contractAddress);

  try {
      const count = await contract.methods.getTokenCount(userAddress).call();
      resultElement.innerText = `Token count: ${count}`;
  } catch (error) {
      console.error(error);
      resultElement.innerText = 'Error retrieving token count!';
  }
}
