// Dados dos itens divididos por categorias
let moveis = [
    { codigo: ' B 001', descricao: 'Sofá', quantidade: 5 },
    { codigo: ' B 002', descricao: 'Mesa de jantar', quantidade: 3 },
    { codigo: ' B 003', descricao: 'Cama de casal', quantidade: 2 },
    { codigo: ' B 004', descricao: 'Guarda-roupa', quantidade: 8 },
    { codigo: ' B 005', descricao: 'Cabeceira', quantidade: 4 },
    { codigo: ' B 006', descricao: 'Beliche', quantidade: 3 },
    { codigo: ' B 007', descricao: 'Cama Box', quantidade: 9},
    { codigo: ' B 008', descricao: 'Cama De Solteiro', quantidade: 4 },
    { codigo: ' B 009', descricao: 'Estante De Sala', quantidade: 35},
    { codigo: ' B 010', descricao: 'Rack Bancada', quantidade: 4 },
    { codigo: ' B 011', descricao: 'Roupeiro Comoda', quantidade: 3 },
    { codigo: ' B 012', descricao: 'Berço Americano', quantidade: 4 },
    { codigo: ' B 013', descricao: 'Tabua De Passar', quantidade: 21},
    { codigo: ' B 014', descricao: 'Jogos De Cadeiras', quantidade: 46 },
    { codigo: ' B 015', descricao: 'Cama Pet', quantidade: 7 },
    { codigo: ' B 016', descricao: 'Poltrona', quantidade: 5 },
    { codigo: ' B 017', descricao: 'Rack Querencia', quantidade: 4 },
    { codigo: ' B 018', descricao: 'Mesa De Centro', quantidade: 9 },
    { codigo: ' B 019', descricao: 'Escrivaninha', quantidade: 34},
    // Adicionar mais itens conforme necessário
  ];
  
  let construcao = [
    { codigo: ' C 001', descricao: 'Cimento', quantidade: 10 },
    { codigo: ' C 002', descricao: 'Areia', quantidade: 8 },
    { codigo: ' C 003', descricao: 'Tijolos', quantidade: 15 },
    { codigo: ' C 004', descricao: 'Telhas', quantidade: 20 },
    { codigo: ' C 005', descricao: 'Furadeira', quantidade: 27 },
    { codigo: ' C 006', descricao: 'Jogo De Ferramentas', quantidade: 14 },
    { codigo: ' C 007', descricao: 'Bomba Periferica', quantidade: 22},
    { codigo: ' C 008', descricao: 'Regua De aluminio', quantidade: 20 },
    { codigo: ' C 009', descricao: 'Tinta', quantidade: 35 },
    { codigo: ' C 010', descricao: 'Carrinho De Mão', quantidade: 20 },
    { codigo: ' C 011', descricao: 'Pá Quadrada', quantidade: 29},
    { codigo: ' C 012', descricao: 'Pá Redonda', quantidade: 20 },
    { codigo: ' C 013', descricao: 'Massa Corrida', quantidade: 20 },
    { codigo: ' C 014', descricao: 'Pistola De Ar Direto', quantidade: 36},
    { codigo: ' C 015', descricao: 'Boia Eletrica', quantidade: 49 },
    { codigo: ' C 016', descricao: 'Lavadora DE Alta Pressão', quantidade: 21 },
    { codigo: ' C 017', descricao: 'Piso Intertravado', quantidade: 41},
    { codigo: ' C 018', descricao: 'Jogos De Chaves De Precisão', quantidade: 64 },
    { codigo: ' C 019', descricao: 'Balde De PVC', quantidade: 17 },
    // Adicionar mais itens conforme necessário
  ];
  
  let eletrodomesticos = [
    { codigo: ' A 001', descricao: 'Geladeira', quantidade: 6 },
    { codigo: ' A 002', descricao: 'Fogão', quantidade: 7 },
    { codigo: ' A 003', descricao: 'Microondas', quantidade: 4 },
    { codigo: ' A 004', descricao: 'Celular', quantidade: 59 },
    { codigo: ' A 005', descricao: 'Máquina de lavar', quantidade: 5 },
    { codigo: ' A 006', descricao: 'Ar Condicionado', quantidade: 8 },
    { codigo: ' A 007', descricao: 'Bebedouro', quantidade: 5 },
    { codigo: ' A 008', descricao: 'Lavadora Family', quantidade: 3 },
    { codigo: ' A 009', descricao: 'TV Smart', quantidade: 6 },
    { codigo: ' A 010', descricao: 'Microndas', quantidade: 7 },
    { codigo: ' A 011', descricao: 'Lava e Seca ', quantidade: 8 },
    { codigo: ' A 012', descricao: 'Controle Remoto', quantidade: 3 },
    { codigo: ' A 013', descricao: 'Ventilador', quantidade: 3 },
    { codigo: ' A 014', descricao: 'Caixa De Som', quantidade: 3 },
    { codigo: ' A 015', descricao: 'Secador De Cabelo', quantidade: 7 },
    { codigo: ' A 016', descricao: 'Sanduicheira', quantidade: 3 },
    { codigo: ' A 017', descricao: 'Fritadeira', quantidade: 6 },
    { codigo: ' A 018', descricao: 'Liquidificador', quantidade: 9},
    { codigo: ' A 019', descricao: 'Pipoqueira Eletrica', quantidade: 3 }
    // Adicionar mais itens conforme necessário
  ];

function mostrarCategoria(categoria) {
    let listaItens = document.getElementById('lista-itens');
    listaItens.innerHTML = ''; // Limpa a lista de itens antes de exibir nova categoria
  
    let itens;
    switch (categoria) {
      case 'moveis':
        itens = moveis;
        break;
      case 'construcao':
        itens = construcao;
        break;
      case 'eletrodomesticos':
        itens = eletrodomesticos;
        break;
      default:
        itens = [];
    }
  
    itens.forEach(item => {
      let itemDiv = document.createElement('div');
      itemDiv.classList.add('item-container'); // Adiciona a classe 'item-container' à div
  
      let li = document.createElement('li');
      li.textContent = `${item.codigo} - ${item.descricao} (${item.quantidade} disponíveis)`;
      
      // Adiciona a classe correspondente à categoria do item
      li.classList.add(categoria);
  
      let button = document.createElement('button');
      button.textContent = 'Retirar';
      button.classList.add('retirar'); // Adiciona a classe 'retirar' ao botão
      button.addEventListener('click', () => retirarItem(item, categoria));
      
      itemDiv.appendChild(li);
      itemDiv.appendChild(button);
      listaItens.appendChild(itemDiv);
    });
  }
  
  function retirarItem(item, categoria) {
    if (item.quantidade > 0) {
      item.quantidade--;
      alert(`Item ${item.descricao} retirado do estoque. Quantidade restante: ${item.quantidade}`);
      mostrarCategoria(categoria); // Atualiza a lista após a retirada do item
    } else {
      alert(`Não há mais unidades disponíveis do item ${item.descricao} no estoque.`);
    }
  }
