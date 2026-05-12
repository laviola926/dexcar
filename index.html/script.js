import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {

getFirestore,
collection,
addDoc,
getDocs

}

from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyCs8V8WgSbl5lDmdaRIJwuLCMO6vcvWQlQ",

authDomain: "dexcar-epi.firebaseapp.com",

projectId: "dexcar-epi",

storageBucket: "dexcar-epi.firebasestorage.app",

messagingSenderId: "908251513666",

appId: "1:908251513666:web:ca62c1ed8176f98f787edb",

measurementId: "G-MEPD929TSN"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

console.log("Firebase conectado");

window.adicionarProduto = async function(){

const nome = document.getElementById("nome").value;

const quantidade = parseInt(document.getElementById("quantidade").value);

const minimo = parseInt(document.getElementById("minimo").value);

if(!nome || isNaN(quantidade) || isNaN(minimo)){

alert("Preencha todos os campos");

return;

}

await addDoc(collection(db, "produtos"), {

nome,
quantidade,
minimo

});

alert("Produto salvo com sucesso");

document.getElementById("nome").value = "";

document.getElementById("quantidade").value = "";

document.getElementById("minimo").value = "";

carregarProdutos();

}

async function carregarProdutos(){

const tabela = document.getElementById("tabelaProdutos");

tabela.innerHTML = "";

const querySnapshot = await getDocs(collection(db, "produtos"));

querySnapshot.forEach((doc)=>{

const produto = doc.data();

tabela.innerHTML += `

<tr>

<td>${produto.nome}</td>

<td>${produto.quantidade}</td>

<td>${produto.minimo}</td>

<td>

<span class="${produto.quantidade <= produto.minimo ? 'baixo':'normal'}">

${produto.quantidade <= produto.minimo ? 'Baixo':'Normal'}

</span>

</td>

</tr>

`;

});

}

carregarProdutos();