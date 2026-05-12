<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dexcar Estoque PRO</title>

<style>

body{
font-family:Arial;
background:#f1f5f9;
margin:0;
padding:0;
}

.login{
width:320px;
margin:80px auto;
background:white;
padding:30px;
border-radius:15px;
box-shadow:0 0 10px rgba(0,0,0,0.1);
}

.login h2{
text-align:center;
color:#0f172a;
}

input,select{
width:100%;
padding:12px;
margin-top:10px;
border-radius:10px;
border:1px solid #ccc;
font-size:16px;
box-sizing:border-box;
}

button{
width:100%;
padding:12px;
margin-top:15px;
background:#2563eb;
color:white;
border:none;
border-radius:10px;
font-size:16px;
cursor:pointer;
}

button:hover{
background:#1d4ed8;
}

header{
background:#0f172a;
color:white;
padding:20px;
text-align:center;
font-size:28px;
font-weight:bold;
}

.container{
padding:20px;
max-width:1200px;
margin:auto;
}

.card{
background:white;
padding:20px;
border-radius:15px;
margin-bottom:20px;
box-shadow:0 2px 10px rgba(0,0,0,0.1);
}

table{
width:100%;
border-collapse:collapse;
margin-top:20px;
}

table th{
background:#0f172a;
color:white;
padding:12px;
}

table td{
padding:12px;
border-bottom:1px solid #ddd;
text-align:center;
}

.baixo{
background:#fee2e2;
color:#dc2626;
padding:5px 10px;
border-radius:20px;
font-weight:bold;
}

.normal{
background:#dcfce7;
color:#16a34a;
padding:5px 10px;
border-radius:20px;
font-weight:bold;
}

.vencendo{
background:#fef3c7;
color:#d97706;
padding:5px 10px;
border-radius:20px;
font-weight:bold;
}

.sair{
background:red;
width:auto;
padding:10px 20px;
float:right;
margin-top:-10px;
}

.dashboard{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:20px;
margin-bottom:20px;
}

.dashboard-card{
background:white;
padding:20px;
border-radius:15px;
box-shadow:0 2px 10px rgba(0,0,0,0.1);
text-align:center;
}

.dashboard-card h3{
margin:0;
color:#64748b;
}

.dashboard-card h2{
font-size:32px;
margin-top:10px;
}

</style>
</head>

<body>

<div id="loginTela" class="login">

<h2>Login Dexcar</h2>

<input type="text" id="usuario" placeholder="Usuário">

<input type="password" id="senha" placeholder="Senha">

<button onclick="fazerLogin()">
Entrar
</button>

<p id="erro" style="color:red;text-align:center"></p>

</div>

<div id="sistema" style="display:none;">

<header>

DEXCAR - SISTEMA DE ESTOQUE PRO

<button class="sair" onclick="sair()">
Sair
</button>

</header>

<div class="container">

<!-- DASHBOARD -->

<div class="dashboard">

<div class="dashboard-card">
<h3>Total Produtos</h3>
<h2 id="totalProdutos">0</h2>
</div>

<div class="dashboard-card">
<h3>Estoque Baixo</h3>
<h2 id="estoqueBaixo">0</h2>
</div>

<div class="dashboard-card">
<h3>Produtos Vencendo</h3>
<h2 id="produtosVencendo">0</h2>
</div>

</div>

<!-- CADASTRO -->

<div class="card">

<h2>Cadastrar Produto</h2>

<input type="text" id="nome" placeholder="Nome do produto">

<input type="number" id="quantidade" placeholder="Quantidade">

<input type="number" id="minimo" placeholder="Estoque mínimo">

<input type="text" id="lote" placeholder="Lote">

<input type="date" id="validade">

<input type="text" id="localizacao" placeholder="Localização">

<button onclick="adicionarProduto()">
Cadastrar Produto
</button>

</div>

<!-- MOVIMENTAÇÃO -->

<div class="card">

<h2>Movimentar Estoque</h2>

<select id="produtoSelect"></select>

<input type="number" id="movQuantidade" placeholder="Quantidade">

<select id="tipoMov">

<option value="entrada">Entrada</option>

<option value="saida">Saída</option>

</select>

<button onclick="movimentarEstoque()">
Salvar Movimentação
</button>

</div>

<!-- TABELA -->

<div class="card">

<h2>Produtos</h2>

<table>

<thead>

<tr>

<th>Produto</th>
<th>Quantidade</th>
<th>Mínimo</th>
<th>Lote</th>
<th>Validade</th>
<th>Localização</th>
<th>Status</th>

</tr>

</thead>

<tbody id="tabelaProdutos"></tbody>

</table>

</div>

</div>

</div>

<script type="module" src="script.js"></script>

</body>
</html>
