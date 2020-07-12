const publicKeyP = document.querySelector("#public-key");
const privateKeyP = document.querySelector("#private-key");
publicKeyP.textContent = "Loading...";
privateKeyP.textContent = "Loading...";

fetch("/keys")
.then( response => response.json())
.then( data => {
    console.log(data);
    let keys = data;
    let publicKey = data.publicKey;
    let privateKey = data.privateKey;
    publicKeyP.textContent = publicKey;
    privateKeyP.textContent = privateKey;
});