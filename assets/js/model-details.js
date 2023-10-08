
const content = document.getElementById('content')
const podeDetail = document.getElementById('poke-detail')




function displayPokeDetail() {
  const modePoke = document.getElementById('model-poke')
  modePoke.classList.remove('hide')
  content.classList.add('hide')
}

function getId(elemento) {
  var idDoElemento = elemento.id
  displayPokeDetail()
  getPokemon(idDoElemento)
}

const url = 'https://pokeapi.co/api/v2/pokemon/'

const getPokemon = (id) => {
  fetch(`${url}${id}`)
  .then(resposta => resposta.json())
  .then(pokemon => {
    const dadosPokemon = {
      id: pokemon.id,
      nome: pokemon.name,
      experience: pokemon.base_experience,
      especie: pokemon.species.name,
      altura: pokemon.height,
      peso: pokemon.weight,
      abilidades: pokemon.abilities.map(item => item.ability.name),
      types: pokemon.types.map(item => item.type.name)
    
    }
    createPokeDetailHTML(dadosPokemon)
  })
}

function createPokeDetailHTML(pokemon) {
  const pagePokemon = document.getElementById('model-poke')
  
  pagePokemon.innerHTML = `
      <div class="detailModelPoke ${pokemon.types[0]}">
      <div class="detailHead">
          <div class="detailHeadingTop">
              <i class='bx bx-arrow-back' id="arrow-back"></i>
              <i class='bx bx-heart'></i>
          </div>
          <div class="detailHeader">
              <div class="detailHeading">
                  <h1 class="detailName">${pokemon.nome}</h1>
                  <div class="datailType">
                      <p  class="type ${pokemon.types[0]}">${pokemon.types[0]}</p>
                      <p id="bgType" class="type ${pokemon.types[1]}">${pokemon.types[1]}</p>
                  </div>
              </div>
              <span>#${pokemon.id}</span>
          </div>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg" alt="namePokemon">
      </div>
      <div class="mainDetail">
          <div class="mainHeader">
              <table id="table">
                  <thead>
                    <tr class="tableHeader">
                      <th>About</th>
                      <th>Base Stats</th>
                      <th>Evolution</th>
                      <th>Moves</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="tableBody">
                      <td>Species</td>
                      <td>${pokemon.especie}</td>
                    </tr>
                    <tr class="tableBody">
                      <td>height</td>
                      <td>${pokemon.altura}</td>
                    </tr>
                    <tr class="tableBody">
                      <td>weight</td>
                      <td>${pokemon.peso}</td>
                    </tr>
                    <tr class="tableBody">
                      <td>Abilities</td>
                      <td>${pokemon.abilidades}</td>
                    </tr>
      
                    <tr class="tableHeader">
                      <th>Breeding</th>
                    </tr>
                    <tr class="tableBody">
                      <td>Gender</td>
                      <td><i class='bx bx-male-sign'></i>87.5%</td>
                      <td> <i class='bx bx-female-sign'></i>12.5%</td>
                    </tr>
                    <tr class="tableBody">
                      <td>Egg Groups</td>
                      <td>Monster</td>
                    </tr>
                    <tr class="tableBody">
                      <td>Egg Cycle</td>
                      <td>Grass</td>
                    </tr>
                  </tbody>
                </table>
          </div>
      </div>
      </div>
      `  
  const arrowBack = document.getElementById('arrow-back')

  function backMenu() {
    const modePoke = document.getElementById('model-poke')
    const content = document.getElementById('content')
    modePoke.classList.add('hide')
    content.classList.remove('hide')
  }

  arrowBack.addEventListener('click', backMenu)

}


podeDetail.addEventListener('click', displayPokeDetail)




// // Suponha que você tenha um array de objetos com dados
// const dados = [
//   { id: 1, nome: 'João', idade: 30 },
//   { id: 2, nome: 'Maria', idade: 25 },
//   { id: 3, nome: 'Pedro', idade: 35 },
// ];

// // Função para preencher a tabela com os dados
// function popularTabela() {
//   const tabela = document.getElementById('table');
//   const tbody = tabela.querySelector('tbody');

//   // Limpa o conteúdo atual da tabela
//   tbody.innerHTML = '';

//   // Loop pelos dados e cria as linhas da tabela
//   dados.forEach((item) => {
//     const row = document.createElement('tr');
//     row.innerHTML = `
//       <td>${item.id}</td>
//       <td>${item.nome}</td>
//       <td>${item.idade}</td>
//     `;
//     tbody.appendChild(row);
//   });
// }

// // Chama a função para popular a tabela
// popularTabela();