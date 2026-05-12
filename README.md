<!DOCTYPE html>
<html lang="pt-BR">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>DEXCAR ESTOQUE PRO</title>

<link rel="stylesheet" href="style.css">

</head>

<body>

<!-- LOGIN -->

<div id="loginTela" class="login-container">

<div class="login-box">

<h1>DEXCAR</h1>

<p>Sistema Inteligente de Estoque</p>

<input type="text" id="usuario" placeholder="Usuário">

<input type="password" id="senha" placeholder="Senha">

<button onclick="fazerLogin()">
Entrar
</button>

<p id="erro"></p>

</div>

</div>

<!-- SISTEMA -->

<div id="sistema" style="display:none;">

<!-- MENU -->

<div class="sidebar">

<h2>DEXCAR</h2>

<ul>

<li>📦 Produtos</li>

<li>📊 Dashboard</li>

<li>📋 Movimentações</li>

<li>⚠️ Alertas</li>

<li>🧾 Auditoria</li>

<li onclick="sair()">🚪 Sair</li>

</ul>

</div>

<!-- CONTEÚDO -->

<div class="main-content">

<header>

<div>

<h1>Controle de Estoque</h1>

<p>Painel Administrativo</p>

</div>

<div class="online">
🟢 Online
</div>

</header>

<!-- DASHBOARD -->

<div class="dashboard">

<div class="card-dashboard">

<h3>Total Produtos</h3>

<h2 id="totalProdutos">0</h2>

</div>

<div class="card-dashboard alerta">

<h3>Estoque Baixo</h3>

<h2 id="estoqueBaixo">0</h2>

</div>

<div class="card-dashboard vencimento">

<h3>Vencendo</h3>

<h2 id="produtosVencendo">0</h2>

</div>

<div class="card-dashboard">

<h3>Movimentações</h3>

<h2 id="movimentacoes">0</h2>

</div>

</div>

<!-- CADASTRO -->

<div class="card">

<h2>Cadastrar Produto</h2>

<div class="grid">

<input type="text" id="nome" placeholder="Produto">

<input type="text" id="codigo" placeholder="Código">

<input type="text" id="categoria" placeholder="Categoria">

<input type="number" id="quantidade" placeholder="Quantidade">

<input type="number" id="minimo" placeholder="Estoque mínimo">

<input type="text" id="fornecedor" placeholder="Fornecedor">

<input type="text" id="lote" placeholder="Lote">

<input type="date" id="validade">

<input type="text" id="localizacao" placeholder="Prateleira / Local">

<input type="number" id="preco" placeholder="Preço">

</div>

<button onclick="adicionarProduto()">
Cadastrar Produto
</button>

</div>

<!-- MOVIMENTAÇÃO -->

<div class="card">

<h2>Movimentar Estoque</h2>

<div class="grid">

<select id="produtoSelect"></select>

<input type="number" id="movQuantidade" placeholder="Quantidade">

<select id="tipoMov">

<option value="entrada">Entrada</option>

<option value="saida">Saída</option>

</select>

<input type="text" id="responsavel" placeholder="Responsável">

</div>

<button onclick="movimentarEstoque()">
Salvar Movimentação
</button>

</div>

<!-- PESQUISA -->

<div class="card">

<h2>Pesquisar Produto</h2>

<input type="text" id="pesquisa" placeholder="Pesquisar produto...">

</div>

<!-- TABELA -->

<div class="card">

<h2>Produtos</h2>

<div class="tabela">

<table>

<thead>

<tr>

<th>Produto</th>

<th>Código</th>

<th>Categoria</th>

<th>Quantidade</th>

<th>Mínimo</th>

<th>Lote</th>

<th>Validade</th>

<th>Localização</th>

<th>Preço</th>

<th>Status</th>

</tr>

</thead>

<tbody id="tabelaProdutos"></tbody>

</table>

</div>

</div>

<!-- HISTÓRICO -->

<div class="card">

<h2>Histórico de Movimentações</h2>

<table>

<thead>

<tr>

<th>Produto</th>

<th>Tipo</th>

<th>Quantidade</th>

<th>Responsável</th>

<th>Data</th>

</tr>

</thead>

<tbody id="historicoMov"></tbody>

</table>

</div>

</div>

</div>

<script type="module" src="script.js"></script>

</body>

</html>
