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

async function scanToken() {
  const tokenId = document.getElementById('tokenId').value;
  const resultElement = document.getElementById('result');

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
